const comparisonData = [
  {
    name: "Đăng nhập",
    category: "Người dùng",
    hubi: "supported",
    limi: "supported",
    note: "Cả hai hệ thống đều có luồng truy cập cho người dùng quản trị và vận hành.",
    priority: "Chuẩn hóa quy trình đăng nhập và phân loại tài khoản sử dụng.",
  },
  {
    name: "Phân quyền theo vai trò",
    category: "Quản trị",
    hubi: "supported",
    limi: "supported",
    note: "HUBI có phân quyền; LiMiVN có thêm màn hình quản lý quyền theo vai trò và nhóm quyền.",
    priority: "Đối chiếu chi tiết ma trận vai trò và phạm vi thao tác của từng nhóm người dùng.",
  },
  {
    name: "Đăng ký tham gia",
    category: "Người dùng",
    hubi: "supported",
    limi: "supported",
    note: "HUBI có luồng đăng ký tham gia; LiMiVN có quy trình tiếp nhận và duyệt hồ sơ tài xế sau eKYC.",
    priority: "Làm rõ đối tượng đăng ký và điều kiện duyệt của từng hệ thống.",
  },
  {
    name: "Quản lý lịch sử giao dịch",
    category: "Giao dịch",
    hubi: "supported",
    limi: "supported",
    note: "Cả hai hệ thống đều có màn hình tra cứu lịch sử giao dịch và theo dõi trạng thái giao dịch.",
    priority: "Chuẩn hóa bộ lọc, cột dữ liệu và khả năng truy vết giao dịch.",
  },
  {
    name: "Nhận tiền / Chuyển tiền",
    category: "Giao dịch",
    hubi: "supported",
    limi: "supported",
    note: "Cả hai hệ thống đều có nghiệp vụ nhận tiền và chuyển tiền; cần đối chiếu thêm phạm vi xử lý, điều kiện giao dịch và luồng vận hành chi tiết.",
    priority: "Đối chiếu sâu hơn về luồng tiền, điều kiện xử lý và các trạng thái giao dịch phát sinh.",
  },
  {
    name: "Đối chiếu giao dịch",
    category: "Đối soát",
    hubi: "supported",
    limi: "supported",
    note: "Cả hai hệ thống đều có chức năng đối chiếu giao dịch",
    priority: "Đối chiếu độ sâu dữ liệu đối soát, trạng thái khớp và thao tác xử lý lệch.",
  },
  {
    name: "Quản lý xe theo từng HKD",
    category: "Vận hành",
    hubi: "supported",
    limi: "partial",
    note: "Trong HUBI, HKD chính là tài xế nên xe được quản lý gắn theo từng tài xế; LiMiVN có quản lý xe HTX và giao xe cho tài xế nhưng chưa thấy thể hiện cùng mô hình dữ liệu.",
    priority: "Đối chiếu cách tổ chức dữ liệu xe gắn với tài xế giữa hai hệ thống.",
  },
  {
    name: "Quản lý tuyến xe theo HTX",
    category: "Vận hành",
    hubi: "supported",
    limi: "missing",
    note: "HUBI có quản lý tuyến xe theo HTX; tài liệu LiMiVN hiện chưa thấy module quản lý tuyến.",
    priority: "Xác minh nhu cầu route management trong LiMiVN nếu cần so sánh sâu hơn.",
  },
  {
    name: "Gán tuyến cho HKD",
    category: "Vận hành",
    hubi: "supported",
    limi: "missing",
    note: "HUBI có khả năng gán tuyến cho HKD; LiMiVN chưa thấy chức năng tương ứng trong tài liệu hiện có.",
    priority: "Đánh giá đây là điểm khác biệt nghiệp vụ chính giữa hai hệ thống.",
  },
  {
    name: "Quản lý hóa đơn",
    category: "Hóa đơn",
    hubi: "supported",
    limi: "supported",
    note: "Cả hai hệ thống đều có module hóa đơn; LiMiVN gồm E-Invoice, hóa đơn GDT và đối soát hóa đơn.",
    priority: "Đối chiếu phạm vi nghiệp vụ hóa đơn, loại hóa đơn và mức độ tích hợp liên quan.",
  },
  {
    name: "Xuất hóa đơn",
    category: "Hóa đơn",
    hubi: "supported",
    limi: "partial",
    note: "HUBI có nhu cầu xuất hóa đơn rõ ràng; LiMiVN thể hiện rõ phần theo dõi và tra cứu hóa đơn, còn thao tác phát hành cần xác minh thêm theo luồng thực tế.",
    priority: "Kiểm tra kỹ quy trình phát hành, gửi lại và đồng bộ hóa đơn ở LiMiVN.",
  },
  {
    name: "Báo cáo doanh thu",
    category: "Báo cáo",
    hubi: "supported",
    limi: "partial",
    note: "HUBI có báo cáo doanh thu; LiMiVN có dashboard, thống kê và một số chỉ số doanh thu nhưng chưa thấy bộ báo cáo doanh thu chuyên sâu trong tài liệu đang đọc.",
    priority: "Bổ sung hoặc xác minh nhóm báo cáo tổng hợp doanh thu nếu cần so sánh chi tiết.",
  },
  {
    name: "Tờ khai thuế",
    category: "Báo cáo",
    hubi: "supported",
    limi: "missing",
    note: "HUBI có tờ khai thuế; LiMiVN hiện chưa thấy chức năng tờ khai thuế trong tài liệu hướng dẫn.",
    priority: "Đánh dấu đây là khoảng trống tính năng đáng chú ý khi so sánh với HUBI.",
  },
];

const statusMeta = {
  supported: {
    label: "Đầy đủ",
    className: "status-chip status-supported",
    score: 1,
  },
  partial: {
    label: "Một phần",
    className: "status-chip status-partial",
    score: 0.6,
  },
  planned: {
    label: "Kế hoạch",
    className: "status-chip status-planned",
    score: 0.35,
  },
  missing: {
    label: "Chưa có",
    className: "status-chip status-missing",
    score: 0,
  },
};

const comparisonBody = document.querySelector("#comparison-body");

function renderTable(data) {
  comparisonBody.innerHTML = data
    .map(
      (item) => `
        <tr class="align-top">
          <td class="px-4 py-4">
            <div class="min-w-[18rem]">
              <div class="flex flex-wrap items-center gap-2">
                <p class="font-semibold text-slate-900">${item.name}</p>
                <span class="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                  ${item.category}
                </span>
              </div>
              <p class="mt-2 text-sm leading-6 text-slate-600">${item.note}</p>
            </div>
          </td>
          <td class="px-4 py-4">
            <span class="${statusMeta[item.limi].className}">${statusMeta[item.limi].label}</span>
          </td>
          <td class="px-4 py-4">
            <span class="${statusMeta[item.hubi].className}">${statusMeta[item.hubi].label}</span>
          </td>
        </tr>
      `
    )
    .join("");
}

renderTable(comparisonData);
