import { type Issue } from "../interfaces/Interfaces";
import { Article } from "../interfaces/Interfaces";


export const Issues: Issue[] = [{
  id: 1,
  title: "テスト",
  body: "テストです",
  correctRate: 80,
  created_at: 0,
  imgUrl: "",
},
{
  id: 2,
  title: "テスト",
  body: "テストです",
  correctRate: 80,
  created_at: 0,
  imgUrl: "",
},
{
  id: 3,
  title: "テスト",
  body: "テストです",
  correctRate: 80,
  created_at: 0,
  imgUrl: "",
}];

export const Article1: Article[] = [{ id: 1, title: "Point1", summary: "This is point1", icon: "dummyUser", url: "/" },
  { id: 2, title: "Point2", summary: "This is point2", icon: "dummyUser", url: "/" },
  { id: 3, title: "Point3", summary: "This is point3", icon: "dummyUser", url: "/" }
];