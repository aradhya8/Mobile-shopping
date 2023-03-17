<template>
<router-link :to="{name:'price'}">price</router-link>|<br>
<router-link :to="{name:'oneplus'}">oneplus</router-link>|<br>
<router-link :to="{name:'apple'}">apple</router-link>|<br>
<router-link :to="{name:'samsung'}">samsung</router-link>
 <router-view />
<ul class="brands-megamenu">
                                <li class="wid_100">
                                    <table width="100%" cellspacing="0" cellpadding="0" border="0" class="sub-menu-wrapper">
                                        <tbody>
                                            <tr>
                                                                                                                      <td valign="top" class="OnePlus">
                                                    <dl class="section oneplus">
                                                    <h1>Oneplus</h1>                                                                                                          
                                                        <dd>
                                                        <ol class="items">
                                                        </ol>
                                                        </dd>
                                                    </dl>
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJiy4hYz0caOXJDasRCt-xXX9tkf2CwTuydg&usqp=CAU" alt="">
                                                </td>
                                                                                                    
                                                                                                                      <td valign="top" class="Apple">
                                                    <dl class="section apple">
                                                    <h1>Apple</h1>                                                                                                           
                                                        <dd>
                                                        <ol class="items">
                                                        </ol>
                                                        </dd>
                                                    </dl>
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ0UbM_8bPJpevUczhXlItHWaXorW4J3fXeQ&usqp=CAU" alt="">
                                                </td>
                                                                                                    
                                                                                                                         <td valign="top" class="Samsung">
                                                    <dl class="section samsung">
                                                        <h1> Samsung </h1>                                                                                                            
                                                        <dd>
                                                        <ol class="items">
                                                        </ol>
                                                        </dd>
                                                    </dl>
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdbU4uGsSSLCkOGERqHpzU8dmMNAf3BeCSRw&usqp=CAU" alt="">
                                                </td>
                                            </tr>                                                 
                                            <tr>                                                                     <td valign="top" class="Xiaomi">
                                                    <dl class="section xiaomi">
                                                        <h1> Xiaomi </h1>                                                                                                          
                                                        <dd>
                                                        <ol class="items">
                                                        </ol>
                                                        </dd>
                                                    </dl>
                                                    <img src="data:image/jpeg;base64,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" alt="">
                                                </td>
                                                                                                    
                                                
                                                                                                                                                    
                                                                                                                                                    
                                                                                                                                                    
                                                                                                                                                    
                                                                                                                                                    
                                                                                                                    <td valign="top" class="Oppo">
                                                    <dl class="section oppo">
                                                        <h1>Oppo</h1>                                                                                                       
                                                        <dd>
                                                        <ol class="items">
                                                        </ol>
                                                        </dd>
                                                    </dl>
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaUjPhgmw3CjP5DLTKCVE2tZoBTUKySFe0-A&usqp=CAU" alt="">
                                                </td>
                                                                                                    
                                                                                                                     <td valign="top" class="Vivo">
                                                    <dl class="section vivo">
                                                        <h1>Vivo</h1>                                                                                                         
                                                        <dd>
                                                        <ol class="items">
                                                        </ol>
                                                        </dd>
                                                    </dl>
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoT5a4vGW9Ol6qAeuIZjJfHL_734kygtKsxQ&usqp=CAU" alt="">
                                                </td>
                                            </tr>
                                            <tr>                                         
                                                                                                                  <td valign="top" class="Realme">
                                                    <dl class="section realme">
                                                        <h1> Realme</h1>                                                                                                         
                                                        <dd>
                                                        <ol class="items">
                                                        </ol>
                                                        </dd>
                                                    </dl>
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjo9xmOkOh5LFnszKDxF5xWUnYYiHsgioX0Q&usqp=CAU" alt="">
                                                </td>
                                                                                                    
                                                                                                          
                                                                                                                  <td valign="top" class="Nokia">
                                                    <dl class="section nokia">
                                                        <h1> Nokia </h1>                                                                                                        
                                                        <dd>
                                                        <ol class="items">
                                                        </ol>
                                                        </dd>
                                                    </dl>
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw9v3YbdCHIK3sZCBWAHDke2fQ0yQQiziG8Q&usqp=CAU" alt="">
                                                </td>
                                                                                                    
                                                                                                                                                    
                                                                                                                                                    
                                                                                                                                                    
                                                                                                                                                    
                                                                                                                                                    
                                                                                                                                                    
                                                                                                                                                    
                                                                                                                                                    
                                                                                                                                                    
    
                                                                                                                                                    
                                                                                                                                                    
                                                                                                                                                    
                                                                                                                                                    
                                                                                                                                                    
                                                                                                                                                    
                                                                                                                                                    
                                                                                                                                                    
                                                                                                                                                    
                                                                                                                                                    
                                                                                                                    <td valign="top" class="Lenovo">
                                                    <dl class="section lenovo">
                                                        <h1>Lenovo</h1>                                                                                                     
                                                        <dd>
                                                        <ol class="items">
                                                        </ol>
                                                        </dd>
                                                    </dl>
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqPHfpkNSd-kUbu9jg4D4FDwFTEcWDeKJWpA&usqp=CAU" alt="">
                                                </td>
                                            </tr>
                                            <tr>                                                  
                                                                                                                     <td valign="top" class="Motorola">
                                                    <dl class="section motorola">
                                                        <h1>Motorola</h1>                                                                                                             
                                                        <dd>
                                                        <ol class="items">
                                                        </ol>
                                                        </dd>
                                                    </dl>
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjsE89gUSebPU1UiSe2ONdQpsE_Owc4b0Y4g&usqp=CAU" alt="">
                                                </td>
                                                                                  
                                                                                                                                                          
                                                                                                                                                    
                                                                                                                                                    
                                                                                                                                                    
                                                                                 <!--<td valign="top" class="navlast_col View_All">
                                                    <dl class="section View_All">
                                                        <dt><a href="category/mobile-phones"> View All </a></dt>
                                                        <dd>
                                                        <ol class="items">
                                                        </ol>
                                                        </dd>
                                                    </dl>
                                                </td>-->
                                            </tr>
            
                                        </tbody>
                                    </table>
                                </li>
                            </ul>
</template>