// src/services/minio.service.ts

import { Client } from 'minio';
import { Stream } from 'stream';

export class MinioClient {
  private minioClient: Client;

  constructor() {
    this.minioClient = new Client({
      endPoint: process.env.MINIO_HOST ?? 'localhost',
      port: parseInt(process.env.MINIO_PORT ?? "9000"),
      useSSL: false,
      accessKey: process.env.MINIO_ACCESS_KEY ?? "",
      secretKey: process.env.MINIO_SECRET_KEY ?? ""
    });
  }

  async getObject(bucketName: string, objectName: string): Promise<Stream> {
    return this.minioClient.getObject(bucketName, objectName);
  }

  async removeObject(bucketName: string, objectName: string): Promise<void> {
    await this.minioClient.removeObject(bucketName, objectName);
  }

  async putObject(bucketName: string, objectName: string, data: Buffer, metaData: any) {
    this.minioClient.putObject(bucketName, objectName, data, metaData);
  }
}