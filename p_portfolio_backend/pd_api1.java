package admin;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.DecimalFormat;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.dbcp.BasicDataSource;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class pd_api1 {

	@Autowired
	BasicDataSource dataSourece;

	@RequestMapping("/admin/pd_api1.do")
	public void apiserver(HttpServletRequest req, Model m) throws Exception {
	
		String result = "";
		String apikey = "";
		String pd_name = "";
		String pd_code = "";
		String react = "";
		String reactMD = "";
		int page = 0 ;
		   if (req.getParameter("page") != null) {
		        page = Integer.valueOf(req.getParameter("page"));
		    }
	
		System.out.println(page);

		if (req.getParameter("keys") != null) {
			apikey = req.getParameter("keys").intern();
		}
		
		if (req.getParameter("react") != null) {
			react = req.getParameter("react").intern();
		}
		if (req.getParameter("reactMD") != null) {
			reactMD = req.getParameter("reactMD").intern();
		}
		System.out.println(reactMD);

		if (req.getParameter("pd_name") != null) {
			pd_name = req.getParameter("pd_name").intern();
		}
		if (req.getParameter("pd_code") != null) {
			pd_code = req.getParameter("pd_code").intern();
		}

		try {
			if (apikey == "pd_knock4") {
				Connection con = dataSourece.getConnection();
				String sql = "";
				PreparedStatement ps = null;

				String totls = "select count(*) as total from product";
				PreparedStatement cc = con.prepareStatement(totls);
				ResultSet totalRs = cc.executeQuery();
				totalRs.next();
				int totalpage = totalRs.getInt("total");
				totalRs.close();
				totalRs.close();
				cc.close();

				if (req.getParameter("keys") != null) {
					sql = "select * from product order by id desc limit ?,10";
					ps = con.prepareStatement(sql);
					ps.setInt(1, page);
				}
				if (req.getParameter("pd_name") != null) {
					sql = "select * from product where pd_name=? order by id desc limit ?,10";
					ps = con.prepareStatement(sql);
					ps.setString(1, pd_name);
					ps.setInt(2, page);
				}

				if (req.getParameter("pd_code") != null) {
					sql = "select * from product where pd_code=? order by id desc limit ?,10";
					ps = con.prepareStatement(sql);
					ps.setString(1, pd_code);
					ps.setInt(2, page);
				}
				
				if (req.getParameter("react") != null) {
					sql = "select * from product where pd_mainca!='이주의 핫딜' order by id desc limit 0,9";
					
					ps = con.prepareStatement(sql);
				}
				if (req.getParameter("reactMD") != null) {
					sql = "select * from product where pd_mainca='이주의 핫딜' order by id desc limit 0,2";
					
					ps = con.prepareStatement(sql);
				}
				
				ResultSet rs = ps.executeQuery();

				JSONArray ja2 = new JSONArray();
				while (rs.next()) {
					String pd_rate = rs.getString("pd_rate") + "%";
					int pd_pri = Integer.valueOf(rs.getString("pd_pri"));
					int pd_s_pri = Integer.valueOf(rs.getString("pd_s_pri"));
					DecimalFormat df = new DecimalFormat("###,###");
					Object pd_pri2 = df.format(pd_pri);
					Object pd_s_pri2 = df.format(pd_s_pri);
					System.out.println(pd_pri2);

					JSONArray ja = new JSONArray();
					ja.add(rs.getString("id"));
					ja.add(rs.getString("pd_code"));
					ja.add(rs.getString("pd_file1"));
					ja.add(rs.getString("pd_name"));
					if(react=="react") {
						ja.add(rs.getString("pd_text1"));
					}else {
						
						ja.add(rs.getString("pd_mainca"));
					}
					// ja.add(rs.getString("pd_subca"));
					ja.add(pd_pri2);
					ja.add(pd_s_pri2);
					ja.add(pd_rate);
					ja.add(rs.getString("pd_stock"));
					ja.add(rs.getString("open_on_off"));
					ja.add(rs.getString("sold_on_off"));
//					 ja.add(rs.getString("pd_file2"));
					// ja.add(rs.getString("pd_file3"));

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
