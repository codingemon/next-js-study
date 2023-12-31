import aws from 'aws-sdk'
export default async function handler(요청, 응답){
    aws.config.update({
      accessKeyId: process.env.ACCESS_KEY, // 자기 어세스 키
      secretAccessKey: process.env.SECRET_KEY, // 자기 키 
      region: 'ap-northeast-2',
      signatureVersion: 'v4',
    })

    const s3 = new aws.S3();
    const url = await s3.createPresignedPost({
      Bucket: process.env.BUCKET_NAME,
      Fields: { key : 요청.query.file },
      Expires: 60, // seconds
      Conditions: [
        ['content-length-range', 0, 1048576], //파일용량 1MB 까지 제한한다.
      ],
    })

    응답.status(200).json(url)