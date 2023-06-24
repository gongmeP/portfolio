package m_reserve;

import java.io.PrintWriter;
import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletResponse;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class spring_m_reserve {

	@Inject
	private SqlSessionTemplate sqlSessionFactory;

	@PostMapping("/login.do")
	public String logingos(@ModelAttribute("m_reserve_vo") m_reserve_vo m_reserve_vo, HttpServletResponse res, Model M)
			throws Exception {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		PrintWriter pw = res.getWriter();

		try {

			List<m_reserve_vo> hh = sqlSessionFactory.selectList("m_reserve_DB.m_select1", m_reserve_vo);
			int su = hh.size();

			if (su > 0) {
			M.addAttribute("m_id", hh.get(0).getM_id());
			M.addAttribute("m_name", hh.get(0).getM_name());

				System.out.println("로그인 완료~");
				pw.print("<script>alert('로그인 되었습니다.');</script>");
				
			} else {
				System.out.println("login.do에 바티스에서 전달 받는거 없음.");
				pw.print("<script>alert('아이디 및 비밀번호를 다시 확인해주세요.'); history.go(-1); </script>");
			}

		} catch (Exception e) {
			System.out.println(e);
			System.out.println("login.do 오류남");
			
		}
		pw.flush();

		return "/m_reserve"; // 예약하는곳으로 가야함
	}

	@PostMapping("/reserve_ck.do")
	public String reserveck(@ModelAttribute("m_reserveck_vo") m_reserveck_vo m_reserveck_vo, HttpServletResponse res,
			Model M) throws Exception {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		PrintWriter pw = res.getWriter();

		try {

			List<m_reserveck_vo> hh = sqlSessionFactory.selectList("m_reserve_DB.m_select2", m_reserveck_vo);

			if(hh.size()>0) {
				
				M.addAttribute("ridx", hh.get(0).getRidx());
				M.addAttribute("m_name", hh.get(0).getM_name());
				M.addAttribute("m_tel", hh.get(0).getM_tel());
				M.addAttribute("m_mt", hh.get(0).getM_mt());
				M.addAttribute("m_dong", hh.get(0).getM_dong());
				M.addAttribute("m_money", hh.get(0).getM_money());
				M.addAttribute("m_person", hh.get(0).getM_person());
				M.addAttribute("event", hh.get(0).getEvent());
				M.addAttribute("rno", hh.get(0).getRno());
				M.addAttribute("pay", hh.get(0).getPay());
				M.addAttribute("indate", hh.get(0).getIndate());
				M.addAttribute("outdate", hh.get(0).getOutdate());
				M.addAttribute("m_date", hh.get(0).getM_date());
			}else {
				System.out.println("바티스에서 값 못받음");
				pw.print("<script>alert('예약번호를 확인해주세요.'); location.href='./m_reserve.jsp';</script>");
			}
			
			
		} catch (Exception e) {
			System.out.println(e);
			System.out.println("reserve_ck.do 에러남");
		}
		pw.flush();
		return "/m_reserve_info"; // 예약 확인하는곳으로 가야함
	}
	
	
	@PostMapping("/reserve_del.do")
	public String reservedel(@RequestParam("rno") String rno, HttpServletResponse res,
			Model M) throws Exception {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		PrintWriter pw = res.getWriter();
		
		System.out.println(rno);

		try {
			int del = sqlSessionFactory.delete("m_reserve_DB.m_del1", rno);
			System.out.println(del);
			if(del>0) {
				pw.print("<script>alert('예약이 정상적으로 취소되었습니다.');</script>");
			}else {
				System.out.println("예약 취소하는곳 에러");
			}

		} catch (Exception e) {
			System.out.println(e);
			System.out.println("reserve_ck.do 에러남");
		}
		pw.flush();
		return "/m_reserve"; // 예약 번호 치는곳으로 가야함
	}
	
	

}
