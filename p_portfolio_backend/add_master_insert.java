package admin;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/admin/add_master_insert.do")
public class add_master_insert extends HttpServlet {
	private static final long serialVersionUID = 1L;

	PrintWriter pw = null;

	public add_master_insert() {
		super();

	}

	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		res.setCharacterEncoding("utf-8");
		res.setContentType("text/html");

		String m_id = req.getParameter("m_id").intern();
		String m_passwd = req.getParameter("m_passwd").intern();
		String m_name = req.getParameter("m_name").intern();
		String m_email = req.getParameter("m_email").intern();
		String m_hp1 = req.getParameter("m_hp1").intern();
		String m_hp2 = req.getParameter("m_hp2").intern();
		String m_hp3 = req.getParameter("m_hp3").intern();
		String m_buser = req.getParameter("buser").intern();
		String m_postion = req.getParameter("postion").intern();
		String YN = req.getParameter("YN").intern();
		
		this.pw = res.getWriter();

		String m_hp = m_hp1 + m_hp2 + m_hp3;
		System.out.println(m_hp);

		if (m_id == "" || m_passwd == "" || m_name == "" || m_email == "" || m_hp == "" || m_buser == ""
				|| m_postion == "" || YN == "") {
			this.pw.print("<script>alert('데이터 빠진듯 확인 ㄱ'); history.go(-1); </script>");

		} else {
			add_master_insertgo join = new add_master_insertgo();
			try {
				String result = join.joingo(m_id, m_passwd, m_name, m_email, m_hp, m_buser, m_postion, YN);

				if (result == "yes") {
					this.pw.print("<script>alert('관리자 등록이 완료되었습니다.'); location.href='./main1.jsp'; </script>");
				} else {
					this.pw.print("<script>alert('몬가 에러남 몬가 몬가임'); history.go(-1); </script>");
				}

			} catch (Exception e) {
				System.out.println(e);
				System.out.println("add_master_insert 에러난다");
			}

		}

	}

}
