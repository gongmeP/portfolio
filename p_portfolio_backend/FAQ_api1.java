package admin;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.dbcp.BasicDataSource;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FAQ_api1 {

	@Autowired
	BasicDataSource dataSourece;

	@RequestMapping("/admin/FAQ_api1.do")
	public void apiserver(HttpServletRequest req, Model m) {
		String result = ""; 
		String faqlist = ""; 
		String apikey = req.getParameter("keys").intern(); 
		
		   if (req.getParameter("faqlist") != null) {
			   faqlist = req.getParameter("faqlist").intern();
		    }

		
		try {
			if (apikey == "FAQAPI_ok") {
				PreparedStatement ps = null;
				Connection con = dataSourece.getConnection();
				
				
				String sql = "select * from FAQ order by id desc";
				ps = con.prepareStatement(sql);
				
				if (req.getParameter("faqlist") != null) {
					sql = "select * from FAQ where cate=? order by id desc";
					ps = con.prepareStatement(sql);
					ps.setString(1, faqlist);
					if(req.getParameter("faqlist").equals("전체")) {
						sql = "select * from FAQ order by id desc";
						ps = con.prepareStatement(sql);
					}
				}
				
				
				
				ResultSet rs = ps.executeQuery();


				JSONArray ja2 = new JSONArray();
				while (rs.next()) {
					JSONArray ja = new JSONArray();
					 ja.add(rs.getString("cate")); 
					 ja.add(rs.getString("Q")); 
					 ja.add(rs.getString("A")); 
					 ja2.add(ja);
				}
				JSONObject responseObj = new JSONObject();
		
				responseObj.put("datas", ja2);
				result = responseObj.toJSONString();
				m.addAttribute("result", result);
				con.close();
				ps.close();

			} else {
				m.addAttribute("result", "error: 키 값 그거 아닌데"); 
			}
		} catch (Exception e) {
			System.out.println(e);
			System.out.println("FAQ_list api 오류 ");
			m.addAttribute("result", "error: FAQ_list 에러"); 

		}

	}
}
