package plan;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/deleteok.do")
public class deleteok extends HttpServlet {
	private static final long serialVersionUID = 1L;
	PrintWriter pw = null;

    public deleteok() {
        super();

    }


	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {

		req.setCharacterEncoding("utf-8");
		res.setCharacterEncoding("utf-8");
		res.setContentType("text/html");
		
		String rno = req.getParameter("rno");
		////38455456
		
		select_reserve sr = new select_reserve();
		this.pw = res.getWriter();
		try {
			String msg = sr.detele_ok(rno);
			System.out.println(msg);
			if(msg.equals("true")) {
				this.pw.print("<script>alert('정상적으로 취소되었습니다.');"
						+"location.href='./reserve2.jsp';" 
						+"</script>");
			}
			else {
				this.pw.print("<script>"
						+ "alert('예약정보 오류');"
						+ "history.go(-1);"
						+ "</script>");
			}
							
			
		} catch (Exception e) {
			System.out.println(e);
			System.out.println("SQL 에러");
			
		}
		
	}

}
