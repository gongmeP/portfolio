package plan;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@WebServlet("/reserve2sess.do")
public class reserve2sess extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
 
    public reserve2sess() {
        super();
       
    }

	
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		HttpSession session = req.getSession(); 
		  req.setCharacterEncoding("utf-8");
	      res.setCharacterEncoding("utf-8");
	      res.setContentType("text/html");
	      String usernm = (String)session.getAttribute("usernm");
	   
	      
	      req.setAttribute("usernm", session.getAttribute("usernm"));
	     
	     
	      res.getWriter().write(usernm);
		
		
	}

}
