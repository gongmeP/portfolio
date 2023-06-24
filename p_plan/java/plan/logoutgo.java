package plan;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/logoutgo.do")
public class logoutgo extends HttpServlet {
	private static final long serialVersionUID = 1L;
    PrintWriter pw = null;
    RequestDispatcher rd = null;
    public logoutgo() {
        super();
    }

	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		res.setCharacterEncoding("utf-8");
		res.setContentType("text/html");
		HttpSession session = req.getSession();	
		session.invalidate();	
		
		this.pw = res.getWriter();
		
		this.pw.print("<script>alert('로그아웃 하셨습니다'); location.href='./index.html';</script>");
	
	}
}