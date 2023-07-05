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
public class config_form_api {

	@Autowired
	BasicDataSource dataSourece;

	@RequestMapping("/admin/config_form_api.do")
	public void apiserver(HttpServletRequest req, Model m) {
		String result = ""; 
		String apikey = req.getParameter("keys").intern(); 
		String m_id = req.getParameter("m_id").intern(); 

		try {
			if (apikey == "config_ok") {
				PreparedStatement ps = null;
				Connection con = dataSourece.getConnection();
				
				
				String sql = "select * from pageall where m_id = ? order by pxid desc limit 0,1";
				ps = con.prepareStatement(sql);
				ps.setString(1, m_id);
				
				ResultSet rs = ps.executeQuery();


				JSONArray ja2 = new JSONArray();
				while (rs.next()) {
					JSONArray ja = new JSONArray();
					 ja.add(rs.getString("h_name")); 
					 ja.add(rs.getString("m_id")); 
					 ja.add(rs.getString("rep_name")); 
					 ja.add(rs.getString("c_number")); 
					 ja.add(rs.getString("net_tel")); 
					 ja.add(rs.getString("c_add")); 
					 ja.add(rs.getString("info_name")); 
					 ja.add(rs.getString("a_mail")); 
					 ja.add(rs.getString("moo_bk")); 
					 ja.add(rs.getString("bk_number")); 
					 ja.add(rs.getString("req_tel")); 
					
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
			System.out.println("config_form_api 오류 ");
			m.addAttribute("result", "error: config_form_api 에러"); 

		}

	}
}
