<tbody>
	<% for(var i = 0; i < data.length; i++){ %>
		<tr>
			<td><%= i+1%></td>
			<td><%= data[i].name %></td>
			<td><%= data[i].points %></td>
			<td><%= data[i].head %></td>
		</tr>
	<% }%>
</tbody>