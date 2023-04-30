const checker = (key, element) => {
  //false= no error
  //true = error
  switch (key) {
    case "firstname":
      if (element === "") {
        return {
          error: true,
          message: "cannot be empty",
        };
      }
      if (element.includes(" ")) {
        return {
          error: true,
          message: "cannot contain spaces",
        };
      }
      return {
        error: false,
        message: "",
      };
    case "lastname":
      if (element === "") {
        return {
          error: true,
          message: "cannot be empty",
        };
      }
      if (element.includes(" ")) {
        return {
          error: true,
          message: "cannot contain spaces",
        };
      }
      return {
        error: false,
        message: "",
      };
    case "username":
      if (element === "") {
        return {
          error: true,
          message: "cannot be empty",
        };
      }
      if (element.includes(" ")) {
        return {
          error: true,
          message: "cannot contain spaces",
        };
      }
      return {
        error: false,
        message: "",
      };
    case "email":
      if (element === "") {
        return {
          error: true,
          message: "cannot be empty",
        };
      }
      if (element.includes(" ")) {
        return {
          error: true,
          message: "cannot contain spaces",
        };
      }
      if (!element.includes("@") || !element.includes(".")) {
        return {
          error: true,
          message: "Not a Valid email",
        };
      }

      return {
        error: false,
        message: "",
      };
    case "password":
      if (element === "") {
        return {
          error: true,
          message: "cannot be empty",
        };
      }
      if (element.includes(" ")) {
        return {
          error: true,
          message: "cannot contain spaces",
        };
      }
      // if (element.length < 8) {
      //   return {
      //     error: true,
      //     message: "Password must be at least 8 characters",
      //   };
      // }
      // let pattern = new RegExp(
      //   '^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$'
      // );
      // if (!pattern.test(element)) {
      //   return {
      //     error: true,
      //     message: "Password must be more complex",
      //   };
      // }

      return {
        error: false,
        message: "",
      };
    default:
      break;
  }
};
export const validator = (props) => {
  let validObj = { ...props };
  for (const key in props) {
    const element = props[key];
    validObj = {
      ...validObj,
      [key]: checker(key, element),
    };
  }

  return validObj;
};
