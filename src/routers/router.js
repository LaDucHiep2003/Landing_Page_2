import { createRouter, createWebHistory } from "vue-router";

import DanhSachCongViec from "@/pages/DanhSachCongViec/DanhSachCongViec.vue";
import Home from "../pages/Home/Home.vue";
import ChiTietCongViec from "@/pages/ChiTietCongViec/ChiTietCongViec.vue";
import QuanLyNguoiDung from "@/pages/QuanLyNguoiDung/QuanLyNguoiDung.vue";
import TaoNguoiDung from "@/pages/QuanLyNguoiDung/TaoNguoiDung.vue";
import QuanLyNguoiDungLayout from "@/pages/QuanLyNguoiDung/QuanLyNguoiDungLayout.vue";
import ChiTietNguoiDung from "@/pages/QuanLyNguoiDung/ChiTietNguoiDung.vue";
import QuanLyVaiTroLayout from "@/pages/QuanLyVaiTro/QuanLyVaiTroLayout.vue";
import PhanNhomNguoiDung from "@/pages/QuanLyVaiTro/PhanNhomNguoiDung.vue";
import CaiDatVaiTro from "@/pages/QuanLyVaiTro/CaiDatVaiTro.vue";
import ThemVaiTro from "@/pages/QuanLyVaiTro/ThemVaiTro.vue";
const routes = [
    {
        path :"/",
        component: Home,
        name : "Home",
        meta: { title: "Quản lý công việc" },
    },
    {
        path :"/chitietcongviec",
        component: ChiTietCongViec,
        name : "chitietcongviec",
        meta: { title: "Chi tiết công việc" },
    },
    {
        path :"/danhsachcongviec",
        component: DanhSachCongViec,
        name : "danhsachcongviec",
        meta: { title: "Danh sách công việc" },
    },
    {
        path : "/quanlynguoidung",
        component: QuanLyNguoiDungLayout,
        children: [
            {
                path : "danhsachnguoidung",
                component : QuanLyNguoiDung,
                name : "quanlynguoidung",
                meta: {
                    title : "Quản lý người dùng"
                }
            },
            {
                path : "taonguoidung",
                component : TaoNguoiDung,
                name : "taonguoidung",
                meta:{
                    title : "Tạo người dùng"
                }
            },
            {
                path : "chitietnguoidung",
                component : ChiTietNguoiDung,
                name : "chitietnguoidung",
                meta:{
                    title : "Chi tiết người dùng"
                }
            }
        ]
    },
    {
        path: "/quan-ly-vai-tro",
        component: QuanLyVaiTroLayout,
        children: [
            {
                path : "phan-nhom-nguoi-dung",
                component : PhanNhomNguoiDung,
                name : "phan-nhom-nguoi-dung",
                meta:{
                    title : "Phân nhóm người dùng"
                }
            },
            {
                path : "cai-dat-vai-tro",
                component : CaiDatVaiTro,
                name : "cai-dat-vai-tro",
                meta:{
                    title : "Cài đặt vai trò"
                }
            },
            {
                path : "them-vai-tro",
                component : ThemVaiTro,
                name : "them-vai-tro",
                meta:{
                    title : "Thêm vai trò"
                }
            }
        ]
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});
export default router;