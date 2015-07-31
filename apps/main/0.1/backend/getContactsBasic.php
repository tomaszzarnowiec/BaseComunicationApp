<?
$root = $_SERVER['DOCUMENT_ROOT'];
require_once($root.'/connection_to_db.php');

$sql = "select name, number from contacts order by name";
$search = $db->prepare($sql);
$search->execute();

$dane = $search->fetch(PDO::FETCH_ASSOC);

echo json_encode($dane);
?>