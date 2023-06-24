package plan;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/part2.do")
public class part2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
	PrintWriter pw = null;
	RequestDispatcher rd = null;
	selects mmm = new selects();
	seno sno = new seno();
    public part2() {
        super();
    }
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		res.setCharacterEncoding("utf-8");
		res.setContentType("text/html");	 
		this.pw = res.getWriter();
		String mt = req.getParameter("mt");
		String ya = req.getParameter("ya");
		String d1 = req.getParameter("d1");
		String d2 = req.getParameter("d2");
		String sno = "";
		try {			
			   sno = this.sno.nono();
			   HttpSession session = req.getSession();
			   ArrayList<String> ar = new ArrayList<String>();
				ar = this.mmm.myinfo((String)session.getAttribute("userid"));
			   ArrayList<String> ok  = new ArrayList<String>();
				int w = 0;
				while(w<=3) {					
					if(!this.mmm.yesno(d1, d2, ya+"-"+w).equals("")){
						ok.add(String.valueOf(w));					
					}
					else {ok.add("x");}
					w++;
				}
				//(String)session.getAttribute("userid")
				ar.add(mt);
				ar.add(ya);	
				ar.add(d1);	
				ar.add(d2);
	 		 req.setAttribute("info", ar);		
		 	 req.setAttribute("da", ok);	
		 	 req.setAttribute("sno", sno);		
			   
			this.rd = req.getRequestDispatcher("./part2.jsp");
			this.rd.forward(req, res);	}
		
		
		catch(Exception e) {	
			System.out.println(e);
		}
	}

}
