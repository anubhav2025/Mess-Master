import bcrypt from "bcryptjs";

const collegeadmins = [
  {
    collegeName: "MNNIT",
    image: "/images/user.png",
    fname: "College",
    lname: "Admin",
    designation: "Admin",
    phone: "1234567890",
    email: "admin@mnnit.com",
    password: bcrypt.hashSync("college@007", 10),
    // messes: ["Tondon", "Tilak"],
  },
];

export default collegeadmins;
