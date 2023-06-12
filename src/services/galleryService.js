import { galleryModel } from '../models/galleryModel.js';

class galleryService {
  static async uploadPhoto(photoData) {
    try {
      const galleryUpload = await galleryModel.uploadPhoto(photoData);
      
      if (!galleryUpload) {
        return {
          status: 400,
          message: '사진을 업로드 할 수 없습니다.',
        };
      }
      return {
        status: 200,
        data: galleryUpload
      };
    } catch (error) {
      return {
        status: 500,
        error: '서버 오류가 발생했습니다.',
      };
    }
  }



  static async updatePhoto(photoData) {
    try {
      const galleryUpdate = await galleryModel.updatePhoto(photoData);

      if (!galleryUpdate) {
        return {
          status: 404,
          message: '사진을 찾을 수 없습니다.',
        };
      }
      return {
        status: 200,
        data: galleryUpdate,
      };
    } catch (error) {
      return {
        status: 500,
        error: '서버 오류가 발생했습니다.',
      };
    }
  }


  static async deletePhoto(photoId) {
    try {
      const galleryDelete = await galleryModel.deletePhoto(photoId);

      if (!galleryDelete) {
        return {
          status: 404,
          message: '사진을 찾을 수 없습니다.',
        };
      }

      return {
        status: 200,
        message: '사진을 삭제했습니다.',
      };
    } catch (error) {
      return {
        status: 500,
        error: '서버 오류가 발생했습니다.',
      };
    }
  }
}

export { galleryService };