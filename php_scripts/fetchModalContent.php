<?php
set_include_path('D:\xampp\includes');
require_once('mim.config.inc');

$data = json_decode(file_get_contents('php://input'), true);
echo showPolicy($data['type']);
