import jwtDecode from "jwt-decode";

// eslint-disable-next-line no-console
console.log("JWT", jwtDecode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzViZDI3M2MwNmY0YTgzM2QzNjI5ZDUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Njc0NjY4NDIsImV4cCI6MTY2NzQ3NDA0Mn0.N5UNeVTLQ2wqFBeEGwAobCXxVdgB4mDVtDA0UPo66VA"));

const checkTokenExpiration = () => {
  const jwtDecode: any = {}
  const token = window.localStorage.getItem('auth_token');
      if (jwtDecode(token).exp < Date.now() / 1000) {
      // eslint-disable-next-line no-console
      console.log("Expired")
      // localStorage.clear();
    }
          // eslint-disable-next-line no-console
          console.log("Not Expired")
  };

  checkTokenExpiration()
