export const pathToRegex = (path) => {
  const slashPattern = /\//g; // 모든 슬래시(/)를 찾기 위한 패턴
  const escapedSlash = "\\/"; // 슬래시를 이스케이프하기 위한 문자열

  const pathVariablePattern = /:\w+/g; // 모든 ':<변수명>' 형태의 경로 변수를 찾기 위한 패턴
  const pathVariableReplacement = "([^/]+)"; // 경로 변수를 캡쳐하기 위한 정규 표현식 그룹

  // 예: path = "/path/:id"
  const regexPath = path
    .replace(slashPattern, escapedSlash) // 첫 번째 replace 후: "\/path\/:id"
    .replace(pathVariablePattern, pathVariableReplacement); // 두 번째 replace 후: "\/path\/([^/]+)"

  // 결과: regex는 ^\/path\/([^/]+)$ 패턴의 정규표현식 객체가 됩니다.
  // 이 정규 표현식은 "/path/"로 시작하고, 그 뒤에 슬래시("/")를 포함하지 않는 문자열을 캡쳐한 후 문자열 끝에 도달하는 문자열에 매치됩니다.
  return new RegExp(`^${regexPath}$`);
};

export const getParams = (match) => {
  // 경로에서 추출한 파라미터 값들
  const pathParameterValues = match.routerResult.slice(1);
  // match.routerResult 에는 location.pathname.match(정규식) 의 결과 값이 들어있다.
  // 첫번째 값은 매칭된 문자열 전체이기 때문에 필요없고 그 뒤의 배열만 필요하다. pathToRegex 함수의 pathVariableReplacement를 보면
  // 괄호로 감싸져있는데 그 캡처 그룹에 매칭되는 것들이 배열의 1번 인덱스부터 존재한다.
  console.log(pathParameterValues, match.routerResult); // url에 posts/1이라고 입력했다면['1'] , ['/posts/1', '1'] 각각 이런 형태

  // 경로에서 파라미터의 이름들 (예: ":id", ":username" 등) 추출
  const pathParameterKeys = [...match.path.matchAll(/:(\w+)/g)].map(
    (result) => {
      return result[1];
    }
  );

  const paramsObj = pathParameterKeys.reduce((obj, key, index) => {
    obj[key] = pathParameterValues[index];
    return obj;
  }, {});

  return paramsObj;
};
