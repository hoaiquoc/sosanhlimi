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
    note: "Cả hai hệ thống đều có chức năng đối chiếu giao dịch.",
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

const systemHighlights = [
  {
    system: "LiMiVN",
    accentClass: "border-brand-100 bg-brand-50/60",
    badgeClass: "bg-brand-100 text-brand-700",
    summary:
      "Hiện chưa có đủ thông tin về app tài xế của LiMiVN để có thể so sánh chi tiết tính năng với HUBI App.",
    items: [
      "Chưa có tài liệu hoặc mô tả đủ chi tiết về app dành cho tài xế.",
      "Chưa thể xác định rõ luồng thao tác của tài xế trên LiMiVN.",
      "Chưa đủ cơ sở để so sánh các tính năng chi tiết như chọn xe, chọn tuyến hoặc xuất hóa đơn.",
    ],
  },
  {
    system: "HUBI",
    accentClass: "border-emerald-100 bg-emerald-50/60",
    badgeClass: "bg-emerald-100 text-emerald-700",
    summary:
      "Luồng tài xế trên HUBI App được mô tả rõ hơn, bao gồm lên đơn hàng, chọn xe, chọn tuyến và xuất hóa đơn sau khi tạo đơn.",
    items: [
      "Tài xế dùng HUBI App để lên đơn hàng.",
      "Có thể chọn xe khi lên đơn hàng.",
      "Có thể chọn tuyến khi lên đơn hàng.",
      "Tuyến gồm 2 loại: cố định và không cố định.",
      "Tuyến cố định lấy từ tuyến mà HTX đã gán cho tài xế.",
      "Sau khi lên đơn có thể xuất hóa đơn cho cá nhân hoặc doanh nghiệp.",
    ],
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
const systemCards = document.querySelector("#system-cards");

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

function renderSystemCards(data) {
  systemCards.innerHTML = data
    .map(
      (item) => `
        <article class="rounded-2xl border p-6 ${item.accentClass}">
          <div class="flex items-center justify-between gap-3">
            <h3 class="text-xl font-semibold text-slate-900">${item.system}</h3>
            <span class="rounded-full px-3 py-1 text-xs font-semibold ${item.badgeClass}">
              Hệ thống
            </span>
          </div>
          <p class="mt-3 text-sm leading-6 text-slate-600">${item.summary}</p>
          <ul class="mt-5 space-y-3 text-sm leading-6 text-slate-700">
            ${item.items
              .map(
                (detail) => `
                  <li class="flex gap-3">
                    <span class="mt-1 h-2 w-2 shrink-0 rounded-full bg-slate-400"></span>
                    <span>${detail}</span>
                  </li>
                `
              )
              .join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

renderTable(comparisonData);
renderSystemCards(systemHighlights);
