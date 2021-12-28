## React.js 연습 프로젝트 (todo-app)

### 💻 React를 연습하기 위해 심플한 디자인의 Todo App 제작

### 사용 기술

- React.js

### 데모 링크 : https://leenawon.github.io/React-practice-Todo/

---

### **완성** 모습

- Main 화면

  - 간단한 ui로, 오늘의 할 일은? 이라는 제목과 사용자가 작성할 수 있는 form으로 구성

![image](https://user-images.githubusercontent.com/76942087/147356652-379faa34-7f51-49bf-b908-ee115431ed3c.png)

- 할 일들을 작성하면 볼 수 있는 모습

![image](https://user-images.githubusercontent.com/76942087/147359443-2441179e-971f-4f16-a34a-b4e918a202fa.png)

- 할 일을 수정하려고 버튼을 클릭하면 보이는 Form

![image](https://user-images.githubusercontent.com/76942087/147475557-d79d6836-6c13-4a13-bef9-1929dddeead1.png)

- 할 일을 수행하고 마쳐서 해당 할 일을 클릭했을 때 줄이 그어진 모습

![image](https://user-images.githubusercontent.com/76942087/147475485-9b2762cf-e0d3-4076-afe9-279a4a4fdd04.png)

- 할 일을 등록할 때 다양하게 적용되는 배경 색에 대한 css style

```CSS
.todo_row:nth-child(4n + 1) {
  background: #aabb97;
}

.todo_row:nth-child(4n + 2) {
  background: #94af76;
}

.todo_row:nth-child(4n + 3) {
  background: #b3bc6d;
}
```

---

### 개선 사항

- 할 일을 저장할 수 있도록 개선 필요
