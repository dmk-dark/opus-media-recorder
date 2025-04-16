declare class OpusMediaRecorder extends MediaRecorder {
  constructor (
    stream: MediaStream,
    options?: MediaRecorderOptions,
    workerOptions?: OpusMediaRecorderWorkerOptions,
    audioOptions?: {
      sampleRate?: number
    })
}

interface OpusMediaRecorderWorkerOptions {
  encoderWorkerFactory: () => Worker,
  OggOpusEncoderWasmPath: string,
  WebMOpusEncoderWasmPath: string,
}

export { OpusMediaRecorderWorkerOptions };
export default OpusMediaRecorder;
