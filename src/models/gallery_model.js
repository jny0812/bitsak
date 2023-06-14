import db from '../config/dbConfig.js';


class gallery_Model {

  // 사진 업로드, DB에 사진 정보 저장
  static async uploadPhoto({username, description, location,take_date, post_date, file_path, password})
   {
        const insertPhoto = 
            'INSERT INTO gallery \
            (username, description, location, take_date, post_date, file_path, password) \
            VALUES (?, ?, ?, ?, ?, ?, ?)';
        await db.query(insertPhoto,
            [
                username,
                description,
                location,
                take_date,
                post_date,
                file_path,
                password
            ]
        );
  }
  
  
  // 사진 수정
  static async updatePhoto(photoData) {
    return new Promise((resolve, reject) => {
      db.query(
        'UPDATE gallery SET  description = ?, location = ?, take_date = ? WHERE gallery_id = ?',
        [photoData.description,
         photoData.location,
         photoData.take_date,
         photoData.file_path,
         photoData.galleryId],
        (err, res) => {
          if (err) {
            console.log('error', err);
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  }


  //비밀번호 가져오기
  static async getPassword({galleryId}) {
    
      const getPassword = 'select password from gallery where gallery_id = ?';
      const [rows] = await db.query(getPassword, [galleryId]);
      console.log('rows:',rows[0]);
      return rows[0];
  }



  // 사진 삭제
  static async deletePhoto(photoId) {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM gallery WHERE gallery_id = ?', [photoId], (err, res) => {
        if (err) {
          console.log('error', err);
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }


  // 특정 location(동)의 사진 데이터 불러오기
  static async getPhotosByLocation(location) {
    return new Promise((resolve, reject) => {
      db.query('SELECT file_path, description, location, take_date, post_date FROM gallery WHERE location = ?', [location], (err, res) => {
        if (err) {
          console.log('error', err);
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

 // 'location' 그룹 별로 개수 count 
//  static async getCountByLocation() {
//   return new Promise((resolve, reject) => {
//     db.query('SELECT location, COUNT(*) AS count FROM gallery GROUP BY location', (err, res) => {
//       if (err) {
//         console.log('error', err);
//         reject(err);
//       } else {
//         resolve(res);
//       }
//     });
//   });
// }

 static async getCountByLocation() {
    const selectPhotoCounts = 'SELECT location, COUNT(*) AS count FROM gallery GROUP BY location';
    const [rows] = await db.query(selectPhotoCounts);

    return rows;
}


  static async getPhotosById({galleryId}) {
    return new Promise((resolve, reject) => {
      db.query('SELECT file_path FROM gallery WHERE gallery_id = ?', [galleryId], (err, res) => {
        if (err) {
          console.log('error', err);
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }


  // location(동)의 사진 데이터 개수(count) 가져오기
  static async getCountByLocation() {
    return new Promise((resolve, reject) => {
      db.query('SELECT location, COUNT(*) AS count FROM gallery GROUP BY location', (err, res) => {
        if (err) {
          console.log('error', err);
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

}


export { gallery_Model };