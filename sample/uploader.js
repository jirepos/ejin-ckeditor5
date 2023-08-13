// MyUploadAdapter 클래스를 사용하여 편집기에서 업로드 어댑터를 활성화하는 
// FileRepository.createUploadAdapter() 팩터리 메서드를 정의합니다.
//
// editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
//   return new MyUploadAdapter( loader );
// };

class MyUploadAdapter {

  constructor( loader ) {
      // The file loader instance to use during the upload.
      this.loader = loader;
  }

  // Starts the upload process.
  upload() {
      // Update the loader's progress.
      // Return a promise that will be resolved when the file is uploaded.
      return this.loader.file
             .then( file => new Promise( ( resolve, reject ) => { 

              debugger;

              // 여기서 업로드 처리 file을 이용 
              console.log(file); 
              // 성공이면 resolve() 처리 
              // 실패이면 reject() 처리
              
             } ) );
  }
  
  // Aborts the upload process.
  abort() {
      // Reject the promise returned from the upload() method.
  }
}
