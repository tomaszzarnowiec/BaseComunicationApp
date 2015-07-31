<?
$root = $_SERVER['DOCUMENT_ROOT'];
require_once($root.'/connection_to_db.php');

$data = json_decode(file_get_contents('php://input'), true);

$typed = $data['tekst'];

$sql = "select name, number from contacts where name like '%$typed%' order by name";
$search = $db->prepare($sql);
$search->execute();

$dane = $search->fetch(PDO::FETCH_ASSOC);

echo json_encode($dane);
?>