package plan;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/add_member.do")
public class add_member extends HttpServlet {
	private static final long serialVersionUID = 1L;
	PrintWriter pw = null;

	public add_member() {
		super();

	}

	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		res.setCharacterEncoding("utf-8");
		res.setContentType("text/html");

		String m_id = req.getParameter("m_id").intern();
		String m_passwd = req.getParameter("m_passwd").intern();
		String m_name = req.getParameter("m_name").intern();
		String m_tel = req.getParameter("m_tel").intern();
		String m_email = req.getParameter("m_email").intern();
		String sms = req.getParameter("sms");
		String event = req.getParameter("event");
		
		System.out.println(sms);
		

		if(sms==null) {
			sms = "N";
			}

		if(event==null) {
			event = "N";			
		}	
		System.out.println(sms+event);

		this.pw = res.getWriter();

		if (m_id == "" || m_passwd == "" || m_name == "" || m_email == "" || m_tel == "" || m_email == "") {
			this.pw.print("<script>alert('빠진 데이터가 있음'); history.go(-1); </script>");

		} else {
			try {
				add_member_insert joins = new add_member_insert();

				String msg = joins.join(m_id, m_passwd, m_name, m_tel, m_email, sms, event);

				if (msg == "yes") {
					this.pw.print("<script>alert('회원가입이 완료되었습니다.'); location.href='./index.html'; </script>");
				} else {
					this.pw.print("<script>alert('회원가입 실패.'); history.go(-1); </script>");
				}

			} catch (Exception e) {
				System.out.println(e);
				System.out.println("add_member에 insert로 가는 조건문쪽 오류");
			}

		}
	}
}
