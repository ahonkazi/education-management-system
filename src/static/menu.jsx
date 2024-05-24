import { AiOutlineAccountBook, AiOutlineSchedule } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { HiOutlineBookOpen, HiOutlineMailOpen } from "react-icons/hi";
import { LiaChalkboardTeacherSolid, LiaWpforms } from "react-icons/lia";
import { MdPayment } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { RiPresentationLine } from "react-icons/ri";
import { TbUserScreen } from "react-icons/tb";
import { VscFolderLibrary } from "react-icons/vsc";

export const menuData = [
    { id: 1, name: "Dashboard", path: "/dashboard", icon: <CgMenuGridO /> },
    { id: 2, name: "Students", path: "/student", icon: <PiStudentFill /> },

    {
        id: 3, name: "Admissions", path: "/admission", icon: <LiaWpforms />,
    },
    { id: 4, name: "Departments", path: "/department", icon: <VscFolderLibrary /> },
    { id: 5, name: "Subjects", path: "/subject", icon: <HiOutlineBookOpen /> },
    { id: 6, name: "Teachers", path: "/teacher", icon: <LiaChalkboardTeacherSolid /> },
    { id: 7, name: "Attendence", path: "/attendence", icon: <TbUserScreen /> },
    { id: 8, name: "Fee payment", path: "/payment", icon: <MdPayment /> },
    { id: 9, name: "Notice", path: "/notice", icon: <AiOutlineAccountBook /> },
    { id: 10, name: "Routine", path: "/routine", icon: <AiOutlineSchedule /> },
    { id: 11, name: "Online classes", path: "/online-class", icon: <RiPresentationLine /> },


]