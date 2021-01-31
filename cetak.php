<! DOCTYPE html>
<html>
<head>
	<title>JADWAL PENGIRIMAN DAN PENANAMAN</title>
</head>
<body>
 
	<center>
	<img class="img-fluid" src="assets/images/logo.png" alt="" />
		<h2>LAPORAN KONSERVASI</h2>
		<h4>DINAS KELAUTAN DAN PERIKANAN JAWA BARAT</h4>
 
	</center>
 
	<?php 
	include 'order.php';
	?>
	<h5>LAPORAN PENGIRIMAN DAN PENANAMAN TERUMBU KARANG</h5>
	<table border="1" style="width: 100%">
		<tr>
			<th width="1%">No</th>
            <th>ID</th>
            <th>Lokasi</th>
			<th>Tanggal Permintaan</th>
            <th>Status Permintaan</th>
			<th>Tanggal Pengiriman</th>
		</tr>
		<?php 
		$no = 1;
		$sql = mysqli_query($order,"select * from orders");
		while($data = mysqli_fetch_array($sql)){
		?>
		<tr>
			<td><?php echo $no++; ?></td>
			<td><?php echo $data['user_id']; ?></td>
            <td><?php echo $data['location_id']; ?></td>
            <td><?php echo $data['tanggal_order']; ?></td>
			<td><?php echo $data['status_order']; ?></td>
			<td><?php echo $data['tanggal_bayar']; ?></td>
		</tr>
		<?php 
		}
		?>
	</table>
 
	<script> window.print();</script>
 
</body>
</html>