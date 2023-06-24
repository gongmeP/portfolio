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


@WebServlet("/part3.do")
public class part3 extends HttpServlet {
	private static final long serialVersionUID = 1L;
	PrintWriter pw = null;
	RequestDispatcher rd = null;
	insert_rmember ir = new insert_rmember();

    public part3() {
        super();
       
    }


	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		HttpSession session = req.getSession();
		req.setCharacterEncoding("utf-8");
		res.setCharacterEncoding("utf-8");
		res.setContentType("text/html");
//		String rno = (String) session.getAttribute("rno");   req.setCharacterEncoding("utf-8");

	      String m_name = req.getParameter("m_name");
	      String m_tel = req.getParameter("m_tel");
	      String m_mt = req.getParameter("m_mt");
	      String m_dong = req.getParameter("m_dong");
	      String m_money = req.getParameter("m_money");
	      String m_person = req.getParameter("m_person");
	      String indate = req.getParameter("indate");
	      String outdate = req.getParameter("outdate");
	      String rno = req.getParameter("rno");

		System.out.println(rno);
		this.pw = res.getWriter();
		
		if(rno == "" ) {
			this.pw.print("<script>alert('예약번호가 없음'); history.go(-1); </script>");
		}else {
			
			
		try {
			 this.ir.rmember(m_name, m_tel, m_mt, m_dong, m_money, m_person, indate, outdate, rno);
			part3select2 sel = new part3select2();
			String datas = sel.part3sel(rno);

			String data[] = datas.split(",");
			System.out.println(Arrays.toString(data));

			if(data[0].equals("true")) {
				
				req.setAttribute("rno", rno);
				req.setAttribute("data", data);
				this.rd = req.getRequestDispatcher("./part3-1.jsp");
				this.rd.forward(req, res);
				
				
			}else {
				this.pw.print("<script>alert('part3 오류인듯'); history.go(-1); </script>");
			}
			
		}catch (Exception e) {
			System.out.println(e);
			System.out.println("part3.do 에러난다");
			this.pw.print("<script>alert('숙소 체크를 해주세요'); history.go(-1); </script>");
		}
		
		}
	}

}
