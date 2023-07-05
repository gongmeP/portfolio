package admin;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.IOUtils;
import org.json.simple.JSONArray;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;

@Controller
public class spring_admin {

	@Inject
	private SqlSessionTemplate sqlSessionFactory;

	// 파일 저장되는거
	@RequestMapping("/admin/imageupload.do")
	public void imgupload(HttpServletRequest req, HttpServletResponse res, MultipartFile upload) {
		OutputStream out = null;
		PrintWriter pw = null;
		res.setCharacterEncoding("utf-8");
		res.setContentType("text/html; charset=utf-8");

		try {
			CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver();
			multipartResolver.setMaxUploadSize(52428688);
			String fileName = upload.getOriginalFilename();
			String getfilename = getUniqueFileName(fileName);
			byte[] bytes = upload.getBytes();

			String uploadpath = req.getSession().getServletContext().getRealPath("/product_img/");
			System.out.println(uploadpath);
			String imgsave = uploadpath + getfilename;
			System.out.println(imgsave);
			out = new FileOutputStream(new File(imgsave));
			out.write(bytes);

			pw = res.getWriter();
			String fileurl = "../product_img/" + getfilename;
			pw.println("{\"filename\":\"" + getfilename + "\", \"uploaded\":1,\"url\":\"" + fileurl + "\"}");
			pw.flush();

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// 이미지
	@GetMapping("/admin/upload/{name:.+}")
	public @ResponseBody byte[] imgsrc(@PathVariable String name, HttpServletRequest req, HttpServletResponse res)
			throws Exception {
		System.out.println(name);
		String webpath = req.getSession().getServletContext().getRealPath("/upload/");
		System.out.println(webpath);

		String img = webpath + name;
		System.out.println(img);

		InputStream in = new FileInputStream(img);
		byte[] imgurl = IOUtils.toByteArray(in);
		System.out.println(imgurl);

		in.close();
		return imgurl;
	}

	// 배너 이미지
	@GetMapping("/imgapi/{name:[a-zA-Z0-9_]+}")
	public @ResponseBody byte[] imgsrc2(@PathVariable String name, HttpServletRequest req, HttpServletResponse res)
			throws Exception {

		System.out.println(name);
		String webpath = req.getSession().getServletContext().getRealPath("/banners/");
		System.out.println(webpath);

		String img = webpath + name + ".png";
		System.out.println(img);

		InputStream in = new FileInputStream(img);

		byte[] imgurl = IOUtils.toByteArray(in);
		System.out.println(imgurl);

		in.close();
		return imgurl;
	}

	@GetMapping("/admin/add_update.do")
	public void add_updates(@RequestParam("midx") int midx, HttpServletResponse res, HttpServletRequest req)
			throws Exception {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		req.setCharacterEncoding("utf-8");

		PrintWriter pw = res.getWriter();

		int r = sqlSessionFactory.update("adminvoDB.dataupdate1", midx);

		if (r > 0) {
			pw.print("<script>alert('관리자 승인이 완료되었습니다.'); location.href='./admin_main.jsp';</script>");
			System.out.println("업데이트 완료");

		} else {
			System.out.println("add_update.do 오류");
		}
		pw.close();
	}

	@GetMapping("/admin/add_update2.do")
	public void add_updates2(@RequestParam("midx") int midx, HttpServletResponse res, HttpServletRequest req)
			throws Exception {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		req.setCharacterEncoding("utf-8");
		PrintWriter pw = res.getWriter();

		int r = sqlSessionFactory.update("adminvoDB.dataupdate2", midx);

		if (r > 0) {
			pw.print("<script>alert('관리자 승인이 거부되었습니다.'); location.href='./admin_main.jsp';</script>");
			System.out.println("업데이트 완료");
		} else {
			System.out.println("add_update2.do 오류");
		}
		pw.close();

	}

	@PostMapping("/admin/idchecks.do")
	public void idcheckss(@RequestParam("m_id") String m_id, HttpServletResponse res) throws Exception {

		List<String> r = sqlSessionFactory.selectList("adminvoDB.checks", m_id);
		System.out.println(r);
		if (r.size() == 0) {
			res.getWriter().write("yes");
		} else if (r.size() > 0) {
			res.getWriter().write("no");
		}

	}

	@PostMapping("/member_insertgo.do")
	public String member_ins(@ModelAttribute("memall") memlistvo memlistvo, HttpServletResponse res, Model M)
			throws Exception {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		PrintWriter pw = res.getWriter();
		try {

			int memin = sqlSessionFactory.insert("adminvoDB.member_in1", memlistvo);
			// List<memlistvo> memsel = sqlSessionFactory.selectList("adminvoDB.member_sel",
			// memlistvo);

			if (memin > 0) {

//			    M.addAttribute("m_id", memlistvo.getM_id());
//			    M.addAttribute("m_name", memlistvo.getM_name());
//			M.addAttribute("nt_title", memlistvo.getNt_title());
//			M.addAttribute("nt_name", memlistvo.getNt_name());
//			M.addAttribute("nt_file", memlistvo.getNt_file());
//			M.addAttribute("nt_text", memlistvo.getNt_text());
//			M.addAttribute("created_at", memlistvo.getCreated_at());
//			M.addAttribute("view_count", memlistvo.getView_count());
				pw.print("<script>alert('회원가입이 완료되었습니다.'); location.href='../portfolio/index.jsp'; </script>");

			} else {
				pw.print("<script>alert('가입 오류'); history.go(-1); </script>");
				System.out.println("join 오류");
			}

		} catch (Exception e) {
			System.out.println(e);
			System.out.println("member_insertgo.do 에러남~");
		}
		pw.close();
		return "./index";
	}

	@PostMapping("/member_logingo.do")
	public String member_login(@ModelAttribute("mem_login") memlistvo memlistvo, HttpServletResponse res,
			HttpServletRequest req) throws Exception {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		PrintWriter pw = res.getWriter();
		try {
			List<memlistvo> login = sqlSessionFactory.selectList("adminvoDB.member_login1", memlistvo);

			if (login.size() > 0) {

				String script = "<script>"
//				            + "localStorage.setItem('m_id', '" + login.get(0).getM_id() + "');"
						+ "sessionStorage.setItem('m_name', '" + login.get(0).getM_name() + "');"
						+ "alert('로그인 되었습니다.');" + "location.href='../portfolio/index.jsp';" + "</script>";
				pw.print(script);

			} else {
				pw.print("<script>alert('아이디 혹은 비밀번호를 잘못 입력하셨거나 등록되지 않은 아이디 입니다.'); history.go(-1); </script>");

			}

		} catch (Exception e) {
			System.out.println(e);
			System.out.println("member_logingo 에러");
		}
		pw.close();
		return "./index";
	}

	@GetMapping("/member_logout_go.do")
	public void member_logout_gogo(@ModelAttribute("mem_login") memlistvo memlistvo, HttpServletResponse res,
			HttpServletRequest req) throws Exception {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		req.setCharacterEncoding("utf-8");
		try {
			PrintWriter pw = res.getWriter();
			HttpSession session = req.getSession();
			session.invalidate();

			pw.print("<script>");
			pw.print("sessionStorage.removeItem('m_id');");
			pw.print("sessionStorage.removeItem('m_name');");
			pw.print("alert('로그아웃 하셨습니다'); location.href='./index.jsp';");
			pw.print("</script>");
			pw.close();
		} catch (Exception e) {
			System.out.println(e);
			System.out.println("member_logout_go 오류");
		}

	}

	@PostMapping("/member_idcheck.do")
	public void mem_idchecks(@RequestParam("m_id") String m_id, HttpServletResponse res, Model M) throws Exception {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		PrintWriter pw = res.getWriter();
		try {
			List<String> m_idck = sqlSessionFactory.selectList("adminvoDB.mem_idck", m_id);
			System.out.println(m_idck.size());
			String msg = "";
			if (m_idck.size() > 0) {
				msg = "no";
			} else {
				msg = "yes";
			}
			System.out.println(msg);
			res.getWriter().write(msg);
		} catch (Exception e) {
			System.out.println(e);
			System.out.println("member_idcheck.do 에러나");
		}
		// return "./index";

		pw.close();

	}

	@GetMapping("/admin/del_member.do")
	public void del_members(@RequestParam(value = "delcheck", required = false) String[] delcheck,
			HttpServletResponse res, HttpServletRequest req) throws Exception {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		req.setCharacterEncoding("utf-8");
		PrintWriter pw = res.getWriter();
		try {
			if (delcheck != null) {
				System.out.println(Arrays.toString(delcheck));
				int x = 0;
				int r = 0;
				while (x < delcheck.length) {
					System.out.println(delcheck[x]);
					r = sqlSessionFactory.update("adminvoDB.mem_del", delcheck[x]);
					x++;
				}
				if (r > 0) {
					pw.print("<script>alert('선택하신 회원이 삭제되었습니다.'); location.href='./member_list.jsp';</script>");
					System.out.println("회원 제거 완료");
				} else {
					System.out.println("del_member.do 오류");
				}
			} else {
				System.out.println("삭제 데이터 안옴 ");
				pw.print("<script>alert('삭제 하실 회원을 선택해주세요.'); location.href='./member_list.jsp';</script>");
			}
		} catch (Exception e) {
			System.out.println(e);
			System.out.println("del_member.do 에러");
			pw.print("<script>alert('처리 중 오류가 발생했습니다.'); location.href='./member_list.jsp';</script>");
		}
		pw.close();
	}

	@GetMapping("/admin/mem_update.do")
	public String mem_updates(@RequestParam("m_id") String m_id, HttpServletResponse res, Model M) throws Exception {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");

		List<memlistvo> r = sqlSessionFactory.selectList("adminvoDB.mem_update", m_id);
		M.addAttribute("m_id", r.get(0).getM_id());
		M.addAttribute("m_name", r.get(0).getM_name());
		M.addAttribute("m_level", r.get(0).getM_level());
		M.addAttribute("m_point", r.get(0).getM_point());
		M.addAttribute("m_hu", r.get(0).getM_hu());
		M.addAttribute("m_byedate", r.get(0).getM_byedate());

		return "./admin/member_modify";
	}

	@PostMapping("/admin/mem_update2.do")
	public String mem_updates2(@ModelAttribute("alldate") memlistvo memlistvo, HttpServletResponse res, Model M)
			throws Exception {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");

		PrintWriter pw = res.getWriter();
		try {
			int r = sqlSessionFactory.update("adminvoDB.mem_update2", memlistvo);
			List<memlistvo> r2 = sqlSessionFactory.selectList("adminvoDB.mem_update", memlistvo);
			M.addAttribute("m_id", r2.get(0).getM_id());
			M.addAttribute("m_name", r2.get(0).getM_name());
			M.addAttribute("m_level", r2.get(0).getM_level());
			M.addAttribute("m_point", r2.get(0).getM_point());
			M.addAttribute("m_hu", r2.get(0).getM_hu());
			M.addAttribute("m_byedate", r2.get(0).getM_byedate());

			if (r > 0) {
			    pw.print("<script>alert('정보수정이 완료되었습니다.'); window.close();</script>");
			    System.out.println("정보수정 굿 ");
			} else {
			    System.out.println("mem_update2.do 오류");
			}

		} catch (Exception e) {
			System.out.println(e);
			System.out.println("mem_update2.do 오류");
			pw.print("<script>alert('입력 가능한 범위를 초과했습니다.');</script>");
		}
		pw.close();
		return "./admin/member_modify";
	}

	@RequestMapping("/admin/config_form_update.do")
	public String config_from_update1(@ModelAttribute("config_fromdata") config_formvo config_formvo,
			HttpServletResponse res, Model M) throws Exception {
		   res.setContentType("text/html");
		   res.setCharacterEncoding("utf-8");
		   System.out.println(config_formvo.h_name);

		try {

			if (config_formvo.h_name != null) {
				List<config_formvo> configall = sqlSessionFactory.selectList("adminvoDB.config_insert", config_formvo);

			} else {

			}

			List<config_formvo> consel = sqlSessionFactory.selectList("adminvoDB.config_select", config_formvo);

			int conselea = consel.size() - 1;

			M.addAttribute("m_id", consel.get(conselea).getM_id());
			M.addAttribute("h_name", consel.get(conselea).getH_name());
			M.addAttribute("a_mail", consel.get(conselea).getA_mail());
			M.addAttribute("point", consel.get(conselea).getPoint());
			M.addAttribute("reward", consel.get(conselea).getReward());
			M.addAttribute("level", consel.get(conselea).getLevel());
			M.addAttribute("c_name", consel.get(conselea).getC_name());
			M.addAttribute("c_number", consel.get(conselea).getC_number());
			M.addAttribute("rep_name", consel.get(conselea).getRep_name());
			M.addAttribute("req_tel", consel.get(conselea).getReq_tel());
			M.addAttribute("net_tel", consel.get(conselea).getNet_tel());
			M.addAttribute("sub_net_tel", consel.get(conselea).getSub_net_tel());
			M.addAttribute("c_post_add", consel.get(conselea).getC_post_add());
			M.addAttribute("c_add", consel.get(conselea).getC_add());
			M.addAttribute("info_name", consel.get(conselea).getInfo_name());
			M.addAttribute("info_email", consel.get(conselea).getInfo_email());
			M.addAttribute("moo_bk", consel.get(conselea).getMoo_bk());
			M.addAttribute("bk_number", consel.get(conselea).getBk_number());
			M.addAttribute("spay", consel.get(conselea).getSpay());
			M.addAttribute("hpay", consel.get(conselea).getHpay());
			M.addAttribute("bpay", consel.get(conselea).getBpay());
			M.addAttribute("min_point", consel.get(conselea).getMin_point());
			M.addAttribute("max_point", consel.get(conselea).getMax_point());
			M.addAttribute("resito", consel.get(conselea).getResito());
			M.addAttribute("delivery_company", consel.get(conselea).getDelivery_company());
			M.addAttribute("delivery_price", consel.get(conselea).getDelivery_price());
			M.addAttribute("coopangday", consel.get(conselea).getCoopangday());

		} catch (Exception e) {
			System.out.println(e);
			System.out.println("config_form_update.do 오류");

		}

		return "./admin/config_form";
	}
	
	

	@PostMapping("/admin/notice_list_insert.do")
	public String notice_list_inserts(@ModelAttribute("noti_dataall") noti_vo noti_vo, HttpServletResponse res, Model M)
			throws Exception {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");

		try {

			List<noti_vo> noti_in = sqlSessionFactory.selectList("adminvoDB.noti_insert", noti_vo);
			List<noti_vo> noti_all = sqlSessionFactory.selectList("adminvoDB.noti_sel", noti_vo);
			List<ArrayList<Object>> notisslist = new ArrayList<>();

			for (noti_vo ch : noti_all) {
				ArrayList<Object> notiss = new ArrayList<>();
				notiss.add(String.valueOf(ch.getNt_id()));
				notiss.add(ch.getNt_title());
				notiss.add(ch.getNt_name());
				notiss.add(ch.getCreated_at());
				notiss.add(String.valueOf(ch.getView_count()));
				notisslist.add(notiss);
			}

			M.addAttribute("noti_all", notisslist);

			int count = noti_all.size();
			M.addAttribute("nt_id", noti_vo.getNt_id());
			M.addAttribute("nt_adm", noti_vo.getNt_adm());
			M.addAttribute("nt_title", noti_vo.getNt_title());
			M.addAttribute("nt_name", noti_vo.getNt_name());
			M.addAttribute("nt_file", noti_vo.getNt_file());
			M.addAttribute("nt_text", noti_vo.getNt_text());
			M.addAttribute("created_at", noti_vo.getCreated_at());
			M.addAttribute("view_count", noti_vo.getView_count());

		} catch (Exception e) {
			System.out.println(e);
			System.out.println("notice_list_insert.do 에러남~");
		}
		return "./admin/notice_list";
	}

	@PostMapping("/admin/notice_list_sel.do")
	public String notice_list_sel(@ModelAttribute("notice_list_sel") noti_vo noti_vo, HttpServletResponse res, Model M)
			throws Exception {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		try {
			List<noti_vo> noti_all = sqlSessionFactory.selectList("adminvoDB.noti_sel", noti_vo);
			List<ArrayList<Object>> notistring = new ArrayList<>();
			M.addAttribute("noti_all", notistring);
		} catch (Exception e) {
			System.out.println(e);
			System.out.println("notice_list_insert.do 에러남~");
		}
		return "./admin/notice_list";
	}

	@GetMapping("/admin/noti_list_del.do")
	public void noto_del(@RequestParam(value = "delcheck", required = false) String[] delcheck, HttpServletResponse res,
			HttpServletRequest req) throws Exception {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		req.setCharacterEncoding("utf-8");
		PrintWriter pw = res.getWriter();
		try {
			if (delcheck != null) {
				System.out.println(Arrays.toString(delcheck));
				int x = 0;
				int r = 0;
				while (x < delcheck.length) {
					System.out.println(delcheck[x]);
					r = sqlSessionFactory.delete("adminvoDB.notis_del", delcheck[x]);
					x++;
				}
				if (r > 0) {
					pw.print("<script>alert('선택하신 공지가 제거되었습니다.'); location.href='./notice_list.jsp';</script>");
					System.out.println("공지 제거 완료");
				} else {
					System.out.println("noti_list_del.do 오류");
				}
			} else {
				System.out.println("공지 삭제할거 안옴");
				pw.print("<script>alert('삭제할 공지를 선택해주세요.'); location.href='./notice_list.jsp';</script>");
			}
		} catch (Exception e) {
			System.out.println(e);
			System.out.println("noti_list_del.do 에러");
			pw.print("<script>alert('처리 중 오류가 발생했습니다.'); location.href='./notice_list.jsp';</script>");
		}
		pw.close();
	}

	@GetMapping("/admin/noti_list_del2.do")
	public void noto_del2(@RequestParam("nt_id") String nt_id, HttpServletResponse res, HttpServletRequest req)
			throws Exception {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		req.setCharacterEncoding("utf-8");
		PrintWriter pw = res.getWriter();

		int del = sqlSessionFactory.delete("adminvoDB.notis_del", nt_id);

		if (del > 0) {
			pw.print("<script>alert('공지가 제거되었습니다.'); location.href='./notice_list.jsp';</script>");
			System.out.println("공지 제거 완");
		} else {
			System.out.println("noti_list_del2.do 오류");
		}
		pw.close();
	}

	@GetMapping("/admin/notice_view.do")
	public Object notice_views(@ModelAttribute("nt_id") noti_vo noti_vo, HttpServletResponse res, Model M)
			throws Exception {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");

		try {
			int gongjirere = 0;
			if(noti_vo.nt_title!=null) {
				gongjirere = sqlSessionFactory.update("adminvoDB.noti_view_update1", noti_vo);
			}else {
				
				int count_upgogo = sqlSessionFactory.update("adminvoDB.noti_view_count", noti_vo.nt_id);
			}
			
			System.out.println(gongjirere);


			List<noti_vo> notiview = sqlSessionFactory.selectList("adminvoDB.noti_view_sel", noti_vo);

			M.addAttribute("nt_id", notiview.get(0).getNt_id());
			M.addAttribute("nt_adm", notiview.get(0).getNt_adm());
			M.addAttribute("nt_title", notiview.get(0).getNt_title());
			M.addAttribute("nt_name", notiview.get(0).getNt_name());
			M.addAttribute("nt_file", notiview.get(0).getNt_file());

			String ntText = notiview.get(0).getNt_text();
			ntText = ntText.replaceAll("<p>", "").replaceAll("</p>", "");

			M.addAttribute("nt_text", ntText);

			M.addAttribute("created_at", notiview.get(0).getCreated_at());
			M.addAttribute("view_count", notiview.get(0).getView_count());

			System.out.println(notiview);

			if(gongjirere>0) {
				PrintWriter pw = res.getWriter();
				pw.print("<script>alert('공지가 수정되었습니다.'); location.href='./notice_list.jsp';</script>");
				pw.close();
			}
		} catch (Exception e) {
			System.out.println(e);
			System.out.println("notice_view.do 에러나");
		}
		return "./admin/notice_view";

	}

	@PostMapping("/admin/setup_in1.do")
	public void notice_list_insert1s(@ModelAttribute("setup1") setup1_vo setup1_vo, HttpServletResponse res,
			HttpServletRequest req) throws Exception {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		res.addHeader("Access-Control-Allow-Origin", "*");
		res.addHeader("Access-Control-Allow-Credentials", "true");
		PrintWriter pw = res.getWriter();
		try {
			int setup1 = sqlSessionFactory.insert("adminvoDB.setup_in1", setup1_vo);

			if (setup1 > 0) {
				pw.print("<script>alert('배너 변경이 완료되었습니다'); location.href='./setup_in1_select.do'; </script>");

				String webpath = req.getSession().getServletContext().getRealPath("/upload/");
				System.out.println(webpath);

				JsonObject jsonObject = new JsonObject();
				JsonObject jsonObject2 = new JsonObject();

				jsonObject.addProperty("Banner1", setup1_vo.getBanner1());
				jsonObject.addProperty("Link1", setup1_vo.getLink1());
				jsonObject.addProperty("Banner2", setup1_vo.getBanner2());
				jsonObject.addProperty("Link2", setup1_vo.getLink2());
				jsonObject.addProperty("Banner3", setup1_vo.getBanner3());
				jsonObject.addProperty("Link3", setup1_vo.getLink3());
				jsonObject.addProperty("Banner4", setup1_vo.getBanner4());
				jsonObject.addProperty("Link4", setup1_vo.getLink4());
				jsonObject2.add("alldata", jsonObject);
				Gson gson = new GsonBuilder().setPrettyPrinting().create();
				String json = gson.toJson(jsonObject2);

				try (FileWriter writer = new FileWriter(webpath + "setup1.json")) {
					writer.write(json);
				}
			}
		} catch (Exception e) {
			System.out.println(e);
			System.out.println("setup_in1.do 에러나");
		}
		pw.close();

	}
	
	
	
	
	@GetMapping("/admin/setup_in1_select.do")
	public String notice_list_insert1ss(@ModelAttribute("setup1ss") setup1_vo setup1_vo, HttpServletResponse res, Model M) throws Exception {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		try {
			
			List<setup1_vo> bannerall = sqlSessionFactory.selectList("adminvoDB.setup_all1", setup1_vo);
			
			M.addAttribute("Banner1", bannerall.get(0).getBanner1());
			M.addAttribute("Link1", bannerall.get(0).getLink1());
			M.addAttribute("Banner2", bannerall.get(0).getBanner2());
			M.addAttribute("Link2", bannerall.get(0).getLink2());
			M.addAttribute("Banner3", bannerall.get(0).getBanner3());
			M.addAttribute("Link3", bannerall.get(0).getLink3());
			M.addAttribute("Banner4", bannerall.get(0).getBanner4());
			M.addAttribute("Link4", bannerall.get(0).getLink4());
	
		}catch (Exception e) {
			System.out.println(e);
			System.out.println("setup_in1_select.do 에러나");
		}
	
		return "./admin/shop_setup";

	}
	
	
	

	@PostMapping("/admin/setup_in2.do")
	public void notice_list_insert2s(@ModelAttribute("setup2") setup2_vo setup2_vo, HttpServletResponse res, Model M)
			throws Exception {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		PrintWriter pw = res.getWriter();

		System.out.println(setup2_vo.popup_enabled);

		try {
			int setup2 = sqlSessionFactory.insert("adminvoDB.setup_in2", setup2_vo);

			if (setup2 > 0) {
				pw.print("<script>alert('팝업창 변경이 완료되었습니다'); location.href='./shop_setup.jsp'; </script>");
			}

		} catch (Exception e) {
			System.out.println(e);
			System.out.println("setup_in2.do 에러나");
		}
		pw.close();

	}

	@PostMapping("/admin/setup_in3.do")
	public void notice_list_insert3s(@ModelAttribute("setup3") setup3_vo setup3_vo, HttpServletResponse res, Model M)
			throws Exception {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		PrintWriter pw = res.getWriter();

		try {
			int setup3 = sqlSessionFactory.insert("adminvoDB.setup_in3", setup3_vo);

			if (setup3 > 0) {
				pw.print("<script>alert('AD 배너 변경이 완료되었습니다'); location.href='./shop_setup.jsp'; </script>");
			}

		} catch (Exception e) {
			System.out.println(e);
			System.out.println("setup_in3.do 에러나");
		}
		pw.close();

	}

	// product 첨부파일 및 입력값 오는곳
	@PostMapping("/admin/pd_insert.do")
	public void pd_insets(@ModelAttribute("pd_data2") pd_vo pd_vo, HttpServletResponse res, HttpServletRequest req)
			throws Exception {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		PrintWriter pw = res.getWriter();

		MultipartFile pdFile1 = pd_vo.getFile1();
		MultipartFile pdFile2 = pd_vo.getFile2();
		MultipartFile pdFile3 = pd_vo.getFile3();

		String orgname1 = pdFile1.getOriginalFilename();
		String orgname2 = pdFile2.getOriginalFilename();
		String orgname3 = pdFile3.getOriginalFilename();

		String FileName1 = getUniqueFileName(orgname1);
		String FileName2 = getUniqueFileName(orgname2);
		String FileName3 = getUniqueFileName(orgname3);

		String svpath = req.getServletContext().getRealPath("");
		String uppath = svpath + "upload/";

		if (!pdFile1.isEmpty()) {
			File uploadFile1 = new File(uppath + FileName1);
			FileCopyUtils.copy(pdFile1.getBytes(), uploadFile1);
			String imageUrl1 = "./upload/" + FileName1;
			pd_vo.setPd_file1(imageUrl1);
		}

		if (!pdFile2.isEmpty()) {
			File uploadFile2 = new File(uppath + FileName2);
			FileCopyUtils.copy(pdFile2.getBytes(), uploadFile2);
			String imageUrl2 = "./upload/" + FileName2;
			pd_vo.setPd_file2(imageUrl2);
		}

		if (!pdFile3.isEmpty()) {
			File uploadFile3 = new File(uppath + FileName3);
			FileCopyUtils.copy(pdFile3.getBytes(), uploadFile3);
			String imageUrl3 = "./upload/" + FileName3;
			pd_vo.setPd_file3(imageUrl3);
		}

		try {
			int pdall = sqlSessionFactory.insert("adminvoDB.pd_insert1", pd_vo);

			if (pdall > 0) {
				pw.print("<script>alert('상품 등록이 완료되었습니다.'); location.href='./shop_product_write.jsp'; </script>");
			}

		} catch (Exception e) {
			System.out.println(e);
			System.out.println("pd_insert.do 에러나");
		}
		pw.close();

	}

	// 이미지 이름 변경하는곳
	private String getUniqueFileName(String originalFileName) {
		String baseName = FilenameUtils.getBaseName(originalFileName);
		String extension = FilenameUtils.getExtension(originalFileName);
		String uniqueName = baseName + "_" + UUID.randomUUID().toString() + "." + extension;
		return uniqueName;
	}

	@PostMapping("/admin/pd_codeck.do")
	public void pd_codecks(@RequestParam("code") String pd_code, HttpServletResponse res, Model M) throws Exception {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		PrintWriter pw = res.getWriter();
		try {
			List<String> codes = sqlSessionFactory.selectList("adminvoDB.pd_chk1", pd_code);
			System.out.println(codes.size());
			String msg = "";
			if (codes.size() > 0) {
				msg = "no";
			} else {
				msg = "yes";
			}
			res.getWriter().write(msg);
		} catch (Exception e) {
			System.out.println(e);
			System.out.println("pd_codeck.do 에러나");
		}

		pw.close();

	}

	@GetMapping("/admin/product_del.do")
	public void product_dels(@RequestParam(value = "delcheck", required = false) String[] delcheck,
			HttpServletResponse res, HttpServletRequest req) throws Exception {
		res.setContentType("text/html");
		res.setCharacterEncoding("utf-8");
		req.setCharacterEncoding("utf-8");
		PrintWriter pw = res.getWriter();
		try {
			if (delcheck != null) {
				System.out.println(Arrays.toString(delcheck));
				int x = 0;
				int r = 0;
				while (x < delcheck.length) {
					System.out.println(delcheck[x]);
					r = sqlSessionFactory.delete("adminvoDB.product_del", delcheck[x]);
					x++;
				}
				if (r > 0) {
					pw.print("<script>alert('선택하신 상품이 제거되었습니다.'); location.href='./shop_product_list.jsp';</script>");
					System.out.println("상품 제거 완료");
				} else {
					System.out.println("product_del.do 오류");
				}
			} else {
				System.out.println("상품 체크 안옴");
				pw.print("<script>alert('삭제할 상품을 선택해주세요.'); location.href='./shop_product_list.jsp';</script>");
			}
		} catch (Exception e) {
			System.out.println(e);
			System.out.println("noti_list_del.do 에러");
			pw.print("<script>alert('처리 중 오류가 발생했습니다.'); location.href='./shop_product_list.jsp';</script>");
		}
		pw.close();
	}

}
