<div id="left-nav">
    <ul>
        <li>
        <?php if($active_page == 'home'){ ?>
        <a href="#" title="Home" class="active">Home</a>
        <?php } else{ ?>
        <a href="index.php" title="Home" class="not-active">Home</a>
        <?php } ?>
        </li>
        <li>
        <?php if($active_page == 'footwear'){ ?>
        <a href="#" title="Footwear" class="active">Footwear</a>
        <?php } else{ ?>
        <a href="footwear.php" title="Footwear" class="not-active">Footwear</a>
        <?php } ?>
        </li>                    
        <li>
        <?php if($active_page == 'bags'){ ?>
        <a href="#" title="Bags" class="active">Bags</a>
        <?php } else{ ?>
        <a href="bags.php" title="Bags" class="not-active">Bags</a>
        <?php } ?>
        </li>                
    </ul>
    <p id="heading">United By Craft</p>
</div><!-- #left-nav -->

