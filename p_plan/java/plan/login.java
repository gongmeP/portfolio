package plan;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@WebServlet("/login.do")
public class login extends HttpServlet {
	private static final long serialVersionUID = 1L;
	PrintWriter pw = null;
	RequestDispatcher rd = null;

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
			this.pw.print("<script>alert('로그인 데이터가 안왔습니다.'); history.go(-1); </script>");

		} else {
			logingo login = new logingo();
			try {
				String result = login.logins(m_id, m_passwd);
				
				
				String data[] = result.split(",");
				System.out.println(Arrays.toString(data));

				if (data[0].equals("true")) {
					HttpSession sec = req.getSession();

					sec.setAttribute("userid",data[1]);
					sec.setAttribute("usernm",data[2]);
					System.out.println(data[2]);
					

//					this.rd = req.getRequestDispatcher("./top2.jsp");
//					this.rd.forward(req, res);
					
			this.pw.print("<script>alert('로그인 되었습니다.'); location.href='./reserve2.jsp';</script>");
				
	                  

				} 

			} catch (Exception e) {
				System.out.println(e);
				this.pw.print("<script>alert('아이디가 없거나 찾을 수 없습니다'); location.href='./reserve2.jsp';  history.go(-1); </script>");
				System.out.println("login.do 에서 에러남");
			}
			
		}
	}

}
