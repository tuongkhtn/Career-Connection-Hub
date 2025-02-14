import { ObjectId } from "mongodb";
import bcrypt from "bcryptjs";

export const users = [
  {
    _id: new ObjectId(),
    first_name: "Vo Anh",
    last_name: "Tuan",
    email: "voanhtuan2004@gmail.com",
    password: bcrypt.hashSync("123", 10),
    is_verified: true,
    verification_code: "123123",
    phone: "+1234567890",
    address: {
      district: "District 1",
      city_state: "Ho Chi Minh City",
      zip_code: "700000",
      country: "Vietnam",
    },
    gender: "male",
    date_of_birth: new Date("1990-01-01"),
    avatar:
      "https://jobsearch.nyc3.digitaloceanspaces.com/avatar/RXR3dxrjt7iRtb2IsZGbbzBzsignature.png",
    short_bio: "Software Engineer with 10 years of experience.",
  },
  {
    _id: new ObjectId(),
    first_name: "Phuc Dong",
    last_name: "Song Gia",
    email: "fuc@email.com",
    password: bcrypt.hashSync("124", 10),
    is_verified: true,
    phone: "+2345678901",
    address: {
      district: "District 2",
      city_state: "Hanoi",
      zip_code: "100000",
      country: "Vietnam",
    },
    gender: "male",
    date_of_birth: new Date("1985-08-20"),
    avatar:
      "https://jobsearch.nyc3.digitaloceanspaces.com/avatar/63ebbcc8-f487-4c81-9187-9e6265f9d40f.jpg",
    short_bio: "Experienced developer specializing in backend systems.",
  },
  {
    _id: new ObjectId(),
    first_name: "Dai",
    last_name: "Tran Ngoc",
    email: "ngocdai101004@gmail.com",
    password: bcrypt.hashSync("1", 10),
    is_verified: true,
    phone: "+2345678901",
    address: {
      district: "District 2",
      city_state: "Hanoi",
      zip_code: "100000",
      country: "Vietnam",
    },
    gender: "male",
    date_of_birth: new Date("1985-08-20"),
    avatar:
      "https://jobsearch.nyc3.digitaloceanspaces.com/avatar/95ae4fdd-500e-404c-9110-bf847a75573c.jpg",
    short_bio: "Full-stack developer with a passion for coding.",
  },

  {
    _id: new ObjectId(),
    first_name: "Hai",
    last_name: "Nguyen",
    email: "nguyenhai@gmail.com",
    password: bcrypt.hashSync("1", 10),
    is_verified: true,
    phone: "+2345678901",
    address: {
      district: "District 2",
      city_state: "Hanoi",
      zip_code: "100000",
      country: "Vietnam",
    },
    gender: "male",
    date_of_birth: new Date("1985-08-20"),
    avatar:
      "https://jobsearch.nyc3.digitaloceanspaces.com/avatar/bac542dc-7ce2-4ed1-a999-7317e8328d00.jpg",
    short_bio: "AI specialist with a focus on machine learning.",
  },
  {
    _id: new ObjectId(),
    first_name: "Linh",
    last_name: "Tran",
    email: "linhtran@example.com",
    password: bcrypt.hashSync("password", 10),
    is_verified: true,
    phone: "+3456789012",
    address: {
      district: "District 3",
      city_state: "Da Nang",
      zip_code: "550000",
      country: "Vietnam",
    },
    gender: "female",
    date_of_birth: new Date("1992-05-15"),
    avatar:
      "https://jobsearch.nyc3.digitaloceanspaces.com/avatar/c413ec8f-8a2b-4c09-a4bb-41458fcec813.jpg",
    short_bio: "Frontend developer with expertise in React and Angular.",
  },
  {
    _id: new ObjectId(),
    first_name: "Minh",
    last_name: "Le",
    email: "minhle@example.com",
    password: bcrypt.hashSync("securepass", 10),
    is_verified: true,
    phone: "+4567890123",
    address: {
      district: "District 4",
      city_state: "Can Tho",
      zip_code: "900000",
      country: "Vietnam",
    },
    gender: "male",
    date_of_birth: new Date("1988-11-30"),
    avatar:
      "https://jobsearch.nyc3.digitaloceanspaces.com/avatar/d4ff1e15-78d8-408a-a2eb-f5364bc0155c.jpg",
    short_bio: "DevOps engineer with a knack for automation and CI/CD.",
  },
];
