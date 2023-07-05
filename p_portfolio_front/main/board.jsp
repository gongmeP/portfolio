<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>CKEditor 연결</title>
<script type="text/javascript" src="./ckeditor/ckeditor.js"></script>
<style type="text/css">
.texts{
width: 800px;
height: 400px;
}
</style>
</head>
<body>

<textarea id="texts" class="texts"></textarea>

</body>

<script type="text/javascript">
CKEDITOR.replace('texts');
</script>
</html>