// src/controllers/file-upload.controller.ts

import {
  Request,
  post,
  RestBindings,
  Response,
  del,
  param,
  get,
  HttpErrors,
} from '@loopback/rest';
import {inject} from '@loopback/context';
import {MinioClient} from '../services/minio.service';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({storage});

export class FileUploadController {
  constructor(
    @inject('services.MinioClient') private minioClient: MinioClient,
  ) {}

  @post('/upload-file')
  async uploadFile(
    @inject(RestBindings.Http.REQUEST) request: Request,
    @inject(RestBindings.Http.RESPONSE) response: Response,
  ): Promise<object> {
    try {
      return new Promise<object>((resolve, reject) => {
        upload.single('file')(request, response, async (err: any) => {
          if (err) reject(err);
          const uploadedFile = (request as any).file;
          const metaData = {
            'Content-Type': uploadedFile.mimetype,
          };
          const fileName = `${Date.now()}-${uploadedFile.originalname}`;

          await this.minioClient.putObject(
            'mentors',
            fileName,
            uploadedFile.buffer,
            metaData,
          );
          resolve({fileName});
        });
      });
    } catch (err) {
      throw err;
    }
  }

  @get('/download-file/{fileName}')
async getFile(
  @param.path.string('fileName') fileName: string,
  @inject(RestBindings.Http.RESPONSE) response: Response,
): Promise<void> {
  return new Promise<void>(async (resolve, reject) => {
    try {
      const fileStream = await this.minioClient.getObject('mentors', fileName);
      response.setHeader('Content-Type', 'image/jpeg'); // Set headers before piping

      fileStream.pipe(response);

      fileStream.on('end', () => resolve());
      fileStream.on('error', (err) => {
        console.error('Stream error:', err);
        response.end(); // End the response on error
        reject(err);
      });
    } catch (err) {
      console.error('Error:', err);
      reject(err);
    }
  });
}

  @del('/delete-file/{fileName}')
  async deleteFile(
    @param.path.string('fileName') fileName: string,
  ): Promise<void> {
    try {
      await this.minioClient.removeObject('mentors', fileName);
    } catch (err) {
      throw new Error('404');
    }
  }

  // @get('/images/{fileName}')
  // async serveImage(
  //   @param.path.string('fileName') fileName: string,
  //   @inject(RestBindings.Http.RESPONSE) response: Response,
  // ): Promise<void> {
  //   const fileStream = await this.minioClient.getObject('mentors', fileName);

  //   // Set appropriate content-type header
  //   // For example, if you know it's a JPEG image, set 'image/jpeg'
  //   response.type('image/jpeg');

  //   return new Promise<void>((resolve, reject) => {
  //     fileStream.pipe(response);
  //     fileStream.on('end', () => resolve());
  //     fileStream.on('error', err => {
  //       // handle error, perhaps set different HTTP status code
  //       reject(err);
  //     });
  //   });
  // }
}
