package plan;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/update.do")
public class update extends HttpServlet {
	PrintWriter pw = null;
	private static final long serialVersionUID = 1L;
	dbconfig dbc = new dbconfig();
	RequestDispatcher rd = null;

	public update() {
		super();
	}

	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		res.setCharacterEncoding("utf-8");
		res.setContentType("text/html");
		String pay = req.getParameter("pay");
		String rno = req.getParameter("rno");
		this.pw = res.getWriter();
		System.out.println(pay);
		System.out.println(rno);
		try {
			Connection con = this.dbc.info();

			updatego rere = new updatego();
			String msg = rere.uptades(pay, rno);

			System.out.println(msg);

			if (msg.equals("true")) {
				
			
 		       this.pw.print("<script>alert('예약이 완료되었습니다.'); location.href='./reserve2.jsp'; </script>");
			}else {
				this.pw.print("<script>alert('예약 오류'); </script>");
			}

		} catch (Exception e) {
			System.out.println(e);
			System.out.println("update.do 오류");
		}

	}

}
