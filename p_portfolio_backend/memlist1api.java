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
public class memlist1api {

	@Autowired
	BasicDataSource dataSourece;

	@RequestMapping("/admin/memlist1api.do")
	public void apiserver(HttpServletRequest req, Model m) throws Exception{
		String result = ""; 
		String apikey = "";
		String m_id = "";
		String m_name = "";
		String m_Ptel = "";
		int page = Integer.valueOf(req.getParameter("page"));
		System.out.println(page);

		if (req.getParameter("keys") != null) {
		    apikey = req.getParameter("keys").intern();
		}

		if (req.getParameter("m_id") != null) {
		    m_id = req.getParameter("m_id").intern();
		}

		if (req.getParameter("m_name") != null) {
		    m_name = req.getParameter("m_name").intern();
		}

		if (req.getParameter("m_Ptel") != null) {
			m_Ptel = req.getParameter("m_Ptel").intern();
		}
		
		
		// DB호출
		try {
			if (apikey == "memlist_knock3") {
				Connection con = dataSourece.getConnection();
				String sql = "";
				PreparedStatement ps = null;
				
				
				String totls = "select count(*) as total from memlist1";
				PreparedStatement cc = con.prepareStatement(totls);
				ResultSet totalRs = cc.executeQuery();
				totalRs.next();
				int totalpage = totalRs.getInt("total");
				totalRs.close();
				totalRs.close();
				cc.close();
				
				

				if (req.getParameter("keys") != null) {
				    sql = "select midx, m_id, m_name, m_passwd, m_level, m_point, m_Ptel, m_Htel, sms, event, DATE(m_memberdate) AS m_memberdate, DATE(m_indate) AS m_indate, DATE(m_byedate) AS m_byedate, m_hu from memlist1 order by midx desc limit ?,10";
				    ps = con.prepareStatement(sql);
				    ps.setInt(1, page);
				}  if (req.getParameter("m_id") != null) {
				    sql = "select midx, m_id, m_name, m_passwd, m_level, m_point, m_Ptel, m_Htel, sms, event, DATE(m_memberdate) AS m_memberdate, DATE(m_indate) AS m_indate, DATE(m_byedate) AS m_byedate, m_hu from memlist1 where m_id=? order by midx desc limit ?,10";
				    ps = con.prepareStatement(sql);
				    ps.setString(1, m_id);
				    ps.setInt(2, page);
				}  if (req.getParameter("m_name") != null) {
				    sql = "select midx, m_id, m_name, m_passwd, m_level, m_point, m_Ptel, m_Htel, sms, event, DATE(m_memberdate) AS m_memberdate, DATE(m_indate) AS m_indate, DATE(m_byedate) AS m_byedate, m_hu from memlist1 where m_name=? order by midx desc limit ?,10";
				    ps = con.prepareStatement(sql);
				    ps.setString(1, m_name);
				    ps.setInt(2, page);
				}  if (req.getParameter("m_Ptel") != null) {
				    sql = "select midx, m_id, m_name, m_passwd, m_level, m_point, m_Ptel, m_Htel, sms, event, DATE(m_memberdate) AS m_memberdate, DATE(m_indate) AS m_indate, DATE(m_byedate) AS m_byedate, m_hu from memlist1 where m_Ptel=? order by midx desc limit ?,10";
				    ps = con.prepareStatement(sql);
				    ps.setString(1, m_Ptel);
				    ps.setInt(2, page);
				}

				ResultSet rs = ps.executeQuery();

				
				JSONArray ja2 = new JSONArray();
				while (rs.next()) {
				
					JSONArray ja = new JSONArray();
					 ja.add(rs.getString("midx")); 
					 ja.add(rs.getString("m_id")); 
					 ja.add(rs.getString("m_name")); 
					 ja.add(rs.getString("m_Ptel")); 
					 ja.add(rs.getString("m_Htel")); 
					 ja.add(rs.getString("m_level")); 
					 ja.add(rs.getString("m_point")); 
					 ja.add(rs.getString("m_indate")); 
					 ja.add(rs.getString("m_memberdate")); 
					 ja.add(rs.getString("sms")); 
					 ja.add(rs.getString("event")); 
					 ja.add(rs.getString("event"));
					 
					 ja2.add(ja);

				}
				JSONObject responseObj = new JSONObject();
				responseObj.put("totalpage", totalpage);
				responseObj.put("datas", ja2);
				responseObj.put("serchpage", ja2.size());
				
				
				result = responseObj.toJSONString();
		
				m.addAttribute("result", result);

				con.close();
				ps.close();
				
				

			} else {
				m.addAttribute("result", "error: 키 값 그거 아닌데"); 
			}
		} catch (Exception e) {
			System.out.println(e);
			m.addAttribute("result", "error: memlist1api 에러"); 
			System.out.println("Database 오류 ");

		}
		

	}
}
