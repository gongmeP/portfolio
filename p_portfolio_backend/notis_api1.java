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
public class notis_api1 {

	@Autowired
	BasicDataSource dataSourece;

	@RequestMapping("/admin/notis_api1.do")
	public void apiserver(HttpServletRequest req, Model m) {
		String result = "";
		String notice = "";
		String noti_name = "";
		String apikey = req.getParameter("keys").intern();
		int page = Integer.valueOf(req.getParameter("page"));
		int pageSize = Integer.valueOf(req.getParameter("pageSize"));

		if (req.getParameter("notice") != null) {
			notice = req.getParameter("notice").intern();
		}
		if (req.getParameter("noti_name") != null) {
			noti_name = req.getParameter("noti_name").intern();
		}

		System.out.println(noti_name);

		try {
			if (apikey == "notis_api1_ok") {
				Connection con = dataSourece.getConnection();

				String sql2 = "select nt_id,nt_title,nt_name,DATE(created_at) AS created_at, view_count from notice_all where nt_adm='Y' order by nt_id desc limit 0,3   ";
				PreparedStatement pps = con.prepareStatement(sql2);

				ResultSet rs2 = pps.executeQuery();

				JSONArray jaja = new JSONArray();
				while (rs2.next()) {

					JSONArray jaja2 = new JSONArray();
					jaja2.add(rs2.getString("nt_id"));
					if (req.getParameter("notice") == null) {
						jaja2.add(rs2.getString("nt_id"));

					}
					jaja2.add(rs2.getString("nt_title"));
					jaja2.add(rs2.getString("nt_name"));
					jaja2.add(rs2.getString("created_at"));
					jaja2.add(rs2.getString("view_count"));
					jaja.add(jaja2);
				}
				rs2.close();
				rs2.close();
				pps.close();

				// 전체 항목 수 가져오기
				String totls = "";
				PreparedStatement cc = null;
				totls = "select count(*) as total from notice_all where nt_adm='N'";
				cc = con.prepareStatement(totls);
				ResultSet totalRs = cc.executeQuery();
				totalRs.next();
				int totalpage = totalRs.getInt("total");

				totalRs.close();
				totalRs.close();
				cc.close();

//				String sql = "select * from notice_all where nt_adm='N' order by nt_id desc limit ?,?";
				String sql = "";
				PreparedStatement ps = null;
				if (req.getParameter("noti_name") != null) {
					sql = "SELECT nt_id, nt_title, nt_name, DATE(created_at) AS created_at, view_count FROM notice_all WHERE nt_adm='N' AND nt_title LIKE ? ORDER BY nt_id DESC LIMIT ?, 10";
					ps = con.prepareStatement(sql);
                    ps.setString(1, "%"+noti_name+"%");
					ps.setInt(2, page);
					
					totls = "select count(*) as total from notice_all WHERE nt_adm='N' AND nt_title LIKE ? ORDER BY nt_id DESC";
					cc = con.prepareStatement(totls);
					cc.setString(1, "%"+noti_name+"%");
					totalRs = cc.executeQuery();
					totalRs.next();
					totalpage = totalRs.getInt("total");

					
				
				} else {

					sql = "select nt_id,nt_title,nt_name,DATE(created_at) AS created_at, view_count from notice_all where nt_adm='N' order by nt_id desc limit ?,?";
					ps = con.prepareStatement(sql);

					ps.setInt(1, page);
					ps.setInt(2, pageSize);
				}
				
				totalRs.close();
				totalRs.close();
				cc.close();

				ResultSet rs = ps.executeQuery();

				JSONArray ja2 = new JSONArray();
				while (rs.next()) {

					JSONArray ja = new JSONArray();
					ja.add(rs.getString("nt_id"));
					if (req.getParameter("notice") == null) {
						ja.add(rs.getString("nt_id"));

					}
					// ja.add(rs.getString("nt_adm"));
					ja.add(rs.getString("nt_title"));
					ja.add(rs.getString("nt_name"));
					ja.add(rs.getString("created_at"));
					// ja.add(rs.getString("nt_file"));
					// ja.add(rs.getString("nt_text"));
					ja.add(rs.getString("view_count"));

					ja2.add(ja);
				}

				JSONObject responseObj = new JSONObject();
				responseObj.put("totalpage", totalpage);
				responseObj.put("datas", ja2);
				responseObj.put("datas2", jaja);

				result = responseObj.toJSONString();
				m.addAttribute("result", result);

				con.close();
				ps.close();

			} else {
				m.addAttribute("result", "error: 키 값 그거 아닌데");
			}
		} catch (Exception e) {
			System.out.println(e);
			System.out.println("api.do 오류 ");
			m.addAttribute("result", "error: api.do 에러");

		}

	}
}
