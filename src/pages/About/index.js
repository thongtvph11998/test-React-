import React from "react"

const About = () => {
	return (
		<div>
			<article className='article_lienhe'>
				<div className='lienhe'>
					<h1 align='center' style={{ margin: "70px", fontFamily: '"Coiny", cursive' }}>
						THÔNG TIN LIÊN HỆ
					</h1>
					<div align='center'>
						<h2 align='center' style={{ color: "red", fontFamily: '"Rye", cursive' }}>
							<strong>MIU SHOP</strong>{" "}
						</h2>
						<div>
							Địa CHỉ: 126-Nguyễn Đổng Chi-Nam Từ Liêm-Hà Nội
							<br />
							Điện thoại liên hệ: <br />
							Phòng support 24/7: (024) 73001955 – Nhánh số 1 <br />
							Phòng hỗ trợ đổi trả: (024) 73001955 – Nhánh số 2 <br />
							Phòng Hành chính – Kế toán: (024) 73001955 – Nhánh số 3 <br />
							Email liên hệ: <a href='#'>tranthong@gmail.com </a> <br />
							<br />
							<div className='time'>
								<h3 style={{ fontFamily: '"Coiny", cursive' }}>Thời gian làm việc trong tuần:</h3>
								<table border={1} width='500'>
									<tbody align='center'>
										<tr>
											<th>Lịch Làm Việc</th>
											<th>Ca Sáng</th>
											<th>Ca Chiều</th>
										</tr>
										<tr>
											<td>Thứ 2-THỨ Bảy</td>
											<td>7h15-11h30</td>
											<td>13h30-17h30</td>
										</tr>
										<tr>
											<td>Chủ Nhật</td>
											<td>Nghỉ</td>
											<td>Nghỉ</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</article>
		</div>
	)
}

export default About
