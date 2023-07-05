package admin;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/admin/login.do")
public class login extends HttpServlet {
	private static final long serialVersionUID = 1L;
	PrintWriter pw = null;

	public login() {
		super();

	}

	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		res.setCharacterEncoding("utf-8");
		res.setContentType("text/html");

		String m_id = req.getParameter("m_id").intern();
		String m_passwd = req.getParameter("m_passwd").intern();

		this.pw = res.getWriter();

		if (m_id == "" || m_passwd == "") {
			this.pw.print("<script>alert('데이터 빠진듯 확인 ㄱ'); history.go(-1); </script>");

		} else {
			logingo login = new logingo();
			try {
				String resilt = login.logingogo(m_id, m_passwd);

				String data[] = resilt.split(",");
				System.out.println(Arrays.toString(data));

				if (data[3].equals("Y") && data[0].equals("true")) {
					HttpSession sec = req.getSession();

					sec.setAttribute("userid", data[1]);
					sec.setAttribute("usernm", data[2]);
					this.pw.print("<script>alert('로그인 되었습니다.'); location.href='./admin_main.jsp';</script>");

				} else if (data[3].intern() == "N" && data[0].equals("true")) {
					this.pw.print("<script>alert('관리자 승인을 대기중 상태입니다.'); history.go(-1); </script>");
				}
				else if (data[3].intern() == "NO" && data[0].equals("true")) {
					this.pw.print("<script>alert('관리자 승인이 거부되었습니다.'); history.go(-1); </script>");
				}
				

			} catch (Exception e) {
				this.pw.print("<script>alert('계정을 찾을 수 업습니다. 아이디 및 패스워드를 다시 확인하세요.'); history.go(-1); </script>");
				System.out.println(e);
				System.out.println("login.do 에서 에러남");
				
			}
		}
	}

}
