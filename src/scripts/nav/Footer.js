




export const Footer = () => {
    return `
    <footer class="foot"><div class="foot__content"> 
  <div class="navbar">
  <label for="yearPost"> Posts Since </label>
  <select name="post" id="Posts">
  <option value="0"> Please select the year...</option>
    <option value="1">2020</option>
    <option value="2">2021</option>
    <option value="3">2022</option>
 
 </select>





    <label for="foot__userPosts"> Posts by User </label>
    <select name="post" id="Posts">
    <option value="0"> Please select the User...</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    <input type="checkbox" id= "users" name="foot" checked>


    <label for="foot__favorites">Show Only Favorites</label> 
</p> 
  </div>

  <div class="foot">
    <p class="relative">
   
    

</footer>
</div>
    `
}