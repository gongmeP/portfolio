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


@WebServlet("/reserve_ck.do")
public class reserve_ck extends HttpServlet {
	private static final long serialVersionUID = 1L;
	PrintWriter pw = null;
	RequestDispatcher rd = null;

    public reserve_ck() {
        super();
       
    }


	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		HttpSession session = req.getSession();
		req.setCharacterEncoding("utf-8");
		res.setCharacterEncoding("utf-8");
		res.setContentType("text/html");

		String rno = req.getParameter("rno");
		System.out.println(rno);
		this.pw = res.getWriter();
		
		if(rno == "") {
			this.pw.print("<script>alert('예약번호 안옴'); history.go(-1); </script>");
		}else {
			
			
		try {
			part3select2 sel = new part3select2();
			String datas = sel.part3sel(rno);

			String data[] = datas.split(",");
			System.out.println(Arrays.toString(data));

			
				
				req.setAttribute("data", data);
				this.rd = req.getRequestDispatcher("./reserve_ck2.jsp");
				this.rd.forward(req, res);
				
				
		
			
		}catch (Exception e) {
			System.out.println(e);
			System.out.println("reserve_ck.do 에러난다");
			this.pw.print("<script>alert('결제가 되지않은 예약번호 입니다. 다시 예약을 진행해주세요.'); history.go(-1); </script>");
		}
		}
	}

}
