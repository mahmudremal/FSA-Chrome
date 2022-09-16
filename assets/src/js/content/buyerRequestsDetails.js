( function ( $ ) {
	class buyerRequestDetails {
		constructor() {
      this.user = {
        currency: this.is( document.querySelector( '.locale-settings-package .currency-selection-trigger' ) ) ? this.currency( document.querySelector( '.locale-settings-package .currency-selection-trigger' ).innerText ) : '$'
      }
      this.base = {};this.database = this.getDatabase();
      this.init();
		}
    init() {
			// this.dev();
      this.trigger();
      this.filters();
      this.keyboard();
    }
    dev() {
      const thisClass = this;
      document.addEventListener( "keypress", ( e )=> {
        // e.preventDefault();
        if( ! e.ctrlKey ) {return;}
        if ( e.keyCode === 76 ) {return;}
        var div = document.createElement( 'div' );
        div.classList.add( 'db-new-main-table', 'align-top', 'js-db-table' );
        var table = '\
          <style>' + thisClass.css() + '</style>';
          div.innerHTML = table;
          if( document.querySelector( '.db-new-main-table.align-top.js-db-table' ) !== null ) { document.querySelector( '.db-new-main-table.align-top.js-db-table' ).remove();}
          document.querySelector( 'article.db-new-content.db-requests.js-db-cont' ).appendChild( div );
          
          this.trigger();this.filters();
      } );
    }
    keyboard() {
      const thisClass = this;
      document.addEventListener( "keypress", ( e )=> {
        // e.preventDefault();
        // var key = String.fromCharCode( e.which ); // a, b,c, d, e.
        // Ctrl + Alt + Shift + U shortcut for delete all from Junk
        if( e.ctrlKey && e.altKey && e.shiftKey && e.which == 85 ) {
          // thisClass.clean( true ); // parametar is if it is all delete? efault: False
        // Ctrl + Alt + U shortcut for delete all which are replied.
        } else if ( e.ctrlKey && e.altKey && e.which == 85 ) {
          thisClass.updateFilters( 'all' );
          // thisClass.clean( false );
        } else {}
      } );
    }
    css() {
      return '';
    }
    trigger() {
      const thisClass = this;
      document.querySelector( '.js-db-table' ).classList.add( 'fwp-js-activate' );
      var link = document.createElement( 'link' );link.href = 'https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css';link.rel = 'stylesheet';document.head.appendChild( link );
      setInterval( () => {
        thisClass.load();
      }, 5000 );
    }
    load() {
      const thisClass = this;
      document.querySelectorAll( '.js-db-table table tbody tr' ).forEach( function( e, i ) {
        if( ! thisClass.is( e.dataset.fwpid ) ) {
          if( e.querySelectorAll( 'a.js-send-offer' ).length >= 1 ) {
            var meta = e.querySelector( 'a.js-send-offer' ).dataset.meta;
            if( ! meta.requestId ) {
              meta = meta.replace( "\n", "" );
              try {meta = JSON.parse( meta );} catch (e) {meta = {};console.log( e );}
            }
            meta.offers = e.querySelector( 'td.applications span' ).innerHTML;
            meta.budget = e.querySelector( 'td.hidden-action span.budget' ).innerHTML;
            meta.delivery = e.querySelector( 'td.hidden-action .duration' ).innerHTML;
            meta.requestDate = e.querySelector( 'td.date span' ).innerHTML;
            meta.requestStatus = false; // False because Button still apear.
            meta.requestAttach = [];
            if( thisClass.is( e.querySelector( 'td.see-more .attachment' ) ) && e.querySelectorAll( 'td.see-more .attachment' ).length >= 1 ) {
              e.querySelectorAll( 'td.see-more .attachment' ).forEach( function( e, i ) {
                meta.requestAttach.push( e.innerHTML );
              } );
            }
            meta.requestTags = [];
            if( thisClass.is( e.querySelector( 'td.text-wide .tags-standard' ) ) && e.querySelectorAll( 'td.text-wide .tags-standard span' ).length >= 1 ) {
              e.querySelectorAll( 'td.text-wide .tags-standard span' ).forEach( function( e, i ) {
                meta.requestTags.push( e.innerText );
              } );
            }
  
            if( thisClass.frame( meta, e ) ) {} else {}
  
          } else {
            // Button not found.
            if( e.querySelectorAll( 'td.hidden-action .hover-show i.fa.fa-reply' ).length >= 1 && thisClass.is( thisClass.base[ e.dataset.fwpid ] ) && thisClass.base[ e.dataset.fwpid ].meta.requestStatus === false ) {
              // Is Proposed. Should be remove.
              thisClass.base[ e.dataset.fwpid ].meta.requestStatus = true;
            }
          }
        } else {
          // Already Executed.
          if( thisClass.is( thisClass.base[ e.dataset.fwpid ] ) ) {
            thisClass.base[ e.dataset.fwpid ].meta.trHtml = e.innerHTML;
          }
        }
      } );
    }
    frame( meta, e ) {
      const thisClass = this;
      if( ! meta.requestId ) {return;}
      e.setAttribute( 'data-fwpid', meta.requestId );
      meta.trHtml = e.innerHTML;
      $.ajax( {
        url: "https://www.fiverr.com/" + meta.username,
        dataType: 'text',
        // data: {
        //   url: "https://www.fiverr.com/" + meta.username
        // },
        success: function( data ) {
          var elements = document.createElement( 'div' );elements.innerHTML = data;
          var result = thisClass.scrap( elements );
          result.meta = meta;
          thisClass.base[ meta.requestId ] = result;
          thisClass.execute( result, e );
          thisClass.updateFilters( 'all' );
          return true;
        },
        error: function( err ) {
          console.log( 'Some error detected', err );
          if( ! thisClass.is( e.getAttribute( 'data-tried' ) ) ) {e.setAttribute( 'data-tried', 1 );}
          if( Number( e.getAttribute( 'data-tried' ) ) <= 3 ) {e.removeAttribute( 'data-fwpid' );e.setAttribute( 'data-tried', ( Number( e.getAttribute( 'data-tried' ) ) + 1 ) );}
          return false;
        }
      } );
    }
    execute( args, e ) {
      const thisClass = this;
      var node, a, div, i, span;
      if( e.querySelectorAll( 'td .fwp-tr-td' ).length <= 0 ) {
        e.querySelectorAll( 'td' ).forEach( function( td, i ) {
          node = document.createElement( 'div' );node.classList.add( 'fwp-tr-td' );td.appendChild( node );
        } );
      }
      // Insert Country Name after DATE.
      if( e.querySelectorAll( 'td.date .fwp-c-location' ).length <= 0 ) {
        i = document.createElement( 'i' );i.classList.add( 'fwp-c-location', 'fi', 'fi-' + thisClass.flags( args.info.location ) );e.querySelector( 'td.date .fwp-tr-td' ).appendChild( i );
        node = document.createElement( 'span' );node.classList.add( 'fwp-c-location' );node.innerText = ( args.info.location ) ? args.info.location : 'N/A';
        e.querySelector( 'td.date .fwp-tr-td' ).appendChild( node );
      }
      
      // Insert Buyer Account date after USER Image.
      if( e.querySelectorAll( 'td.profile-40 .fwp-c-date' ).length <= 0 ) {
        node = document.createElement( 'span' );node.classList.add( 'fwp-c-name' );node.innerText = args.meta.username;e.querySelector( 'td.profile-40' ).appendChild( node );
        node = document.createElement( 'span' );node.classList.add( 'fwp-c-date' );node.innerText = thisClass.is( args.info.since ) ? args.info.since : 'N/A';
        e.querySelector( 'td.profile-40 .fwp-tr-td' ).appendChild( thisClass.icons( 'profile' ) );e.querySelector( 'td.profile-40 .fwp-tr-td' ).appendChild( node );
      }
      
      // Insert Buyer Account review after Descriptions.
      if( e.querySelectorAll( 'td.text-wide .fwp-c-review' ).length <= 0 ) {
        var div = document.createElement( 'div' ),
            div1 = document.createElement( 'div' ),
            div2 = document.createElement( 'div' );
        div.classList.add( 'fwp-wrap-review' );div1.classList.add( 'fwp-wrap-review-col' );div2.classList.add( 'fwp-wrap-review-col' );div1.appendChild( thisClass.icons( 'review' ) );div2.appendChild( thisClass.icons( 'review' ) );
        span = document.createElement( 'span' );span.innerText = 'Reviews as Buyer';div1.appendChild( span );
        span = document.createElement( 'span' );span.innerText = 'Reviews as Seller';div2.appendChild( span );

        span = document.createElement( 'span' );span.innerText = thisClass.is( args.rating.rab ) ? args.rating.rab + ( thisClass.is( args.rating.rabt ) ? args.rating.rabt : '' ) : 'None';div1.appendChild( span );
        span = document.createElement( 'span' );span.innerText = thisClass.is( args.rating.ras ) ? args.rating.ras + ( thisClass.is( args.rating.rast ) ? args.rating.rast : '' ) : 'None';div2.appendChild( span );
        
        div.appendChild( div1 );div.appendChild( div2 );
        e.querySelector( 'td.text-wide .fwp-tr-td, td.see-more .fwp-tr-td' ).appendChild( div );
      }
      
      // Insert Buyer Responding time after OFFERS SENT.
      // Nothing. This field width is not enough
      if( e.querySelectorAll( 'td.applications .fwp-c-link' ).length <= 0 ) {
        node = document.createElement( 'a' );node.classList.add( 'fwp-c-link' );node.href = 'https://www.fiverr.com/' + args.meta.username;node.target = '_blank';
        node.appendChild( thisClass.icons( 'link' ) );e.querySelector( 'td.applications .fwp-tr-td' ).appendChild( node );
      }

      // Insert Buyer Online Status time after DURATION.
      if( e.querySelectorAll( 'td.hidden-action:nth-child(5) .fwp-c-status' ).length <= 0 ) {
        var status = ( thisClass.is( args.info.online ) && ( args.info.online.toLowerCase() ).includes( 'online' ) ) ? 'Online' : 'Offline';
        node = document.createElement( 'span' );node.classList.add( 'fwp-c-online' );node.innerText = status;
        e.querySelector( 'td.hidden-action:nth-child(5) .fwp-tr-td' ).appendChild( thisClass.icons( status.toLowerCase() ) );e.querySelector( 'td.hidden-action:nth-child(5) .fwp-tr-td' ).appendChild( node );
      }

      
      // Insert Buyer Responding time after Price and Button.
      if( e.querySelectorAll( 'td.hidden-action:nth-child(6) .fwp-c-response' ).length <= 0 && e.querySelector( 'td.hidden-action:nth-child(6)' ) !== null ) {
        node = document.createElement( 'span' );node.classList.add( 'fwp-c-response' );node.innerText = thisClass.is( args.info.response ) ? args.info.response : 'N/A';
        e.querySelector( 'td.hidden-action:nth-child(6) .fwp-tr-td' ).appendChild( thisClass.icons( 'response' ) );e.querySelector( 'td.hidden-action:nth-child(6) .fwp-tr-td' ).appendChild( node );
      }

      // Insert an Iframe after Description.
      // if( e.querySelectorAll( 'td.see-more .extension-requestpage-iframe' ).length <= 0 && e.querySelector( 'td.see-more' ) !== null ) {
      //   node = document.createElement( 'iframe' );node.classList.add( 'extension-requestpage-iframe' );node.src = 'https://www.fiverr.com/' + args.meta.username;node.setAttribute( 'frameborder', 0 );node.setAttribute( 'allowfullscreen', true );
      //   // e.querySelector( 'td.see-more' ).appendChild( node );
      // }
    }
    scrap( doc ) {
      const thisClass = this;
      var e = doc.querySelector( '.rating-stars' ),
          u = thisClass.is( doc.querySelector( '.seller-card .username-line .seller-link' ) ) ? doc.querySelector( '.seller-card .username-line .seller-link' ).innerText : false,
          r = thisClass.is( doc.querySelector( '.rating-stars' ) ) ? doc.querySelector( '.rating-stars' ).getAttribute( 'data-user-rating' ) : false,
          t = thisClass.is( doc.querySelector( '.rating-stars' ) ) ? doc.querySelector( '.rating-stars' ).getAttribute( 'data-user-ratings-count' ) : false,
          scl = thisClass.is( doc.querySelector( '.reviews-package .reviews-header .summary ul.header-stars li:nth-child( 1 ) .orca-rating .rating-score' ) ) ? doc.querySelector( '.reviews-package .reviews-header .summary ul.header-stars li:nth-child( 1 ) .orca-rating .rating-score' ).innerText : false,
          rtf = thisClass.is( doc.querySelector( '.reviews-package .reviews-header .summary ul.header-stars li:nth-child( 2 ) .orca-rating .rating-score' ) ) ? doc.querySelector( '.reviews-package .reviews-header .summary ul.header-stars li:nth-child( 2 ) .orca-rating .rating-score' ).innerText : false,
          sad = thisClass.is( doc.querySelector( '.reviews-package .reviews-header .summary ul.header-stars li:nth-child( 3 ) .orca-rating .rating-score' ) ) ? doc.querySelector( '.reviews-package .reviews-header .summary ul.header-stars li:nth-child( 3 ) .orca-rating .rating-score' ).innerText : false,
          ras = thisClass.is( doc.querySelector( '#reviews_header_as_seller .orca-rating .rating-score' ) ) ? doc.querySelector( '#reviews_header_as_seller .orca-rating .rating-score' ).innerText : false,
          rast = thisClass.is( doc.querySelector( '#reviews_header_as_seller .orca-rating .ratings-count' ) ) ? doc.querySelector( '#reviews_header_as_seller .orca-rating .ratings-count' ).innerText : false,
          rab = thisClass.is( doc.querySelector( '#reviews_header_as_buyer .orca-rating .rating-score' ) ) ? doc.querySelector( '#reviews_header_as_buyer .orca-rating .rating-score' ).innerText : false,
          rabt = thisClass.is( doc.querySelector( '#reviews_header_as_buyer .orca-rating .ratings-count' ) ) ? doc.querySelector( '#reviews_header_as_buyer .orca-rating .ratings-count' ).innerText : false,
          l = thisClass.is( doc.querySelector( '.seller-card ul.user-stats li.location b' ) ) ? doc.querySelector( '.seller-card ul.user-stats li.location b' ).innerText : false,
          ms = thisClass.is( doc.querySelector( '.seller-card ul.user-stats li.member-since b' ) ) ? doc.querySelector( '.seller-card ul.user-stats li.member-since b' ).innerText : false,
          rt = thisClass.is( doc.querySelector( '.seller-card ul.user-stats li.response-time b' ) ) ? doc.querySelector( '.seller-card ul.user-stats li.response-time b' ).innerText : false,
          rth = thisClass.is( doc.querySelector( '.orca-rating .stars' ) ) ? doc.querySelector( '.orca-rating .stars' ).innerHTML : false,
          ld = thisClass.is( doc.querySelector( '.seller-card ul.user-stats li.recent-delivery strong' ) ) ? doc.querySelector( '.seller-card ul.user-stats li.recent-delivery strong' ).innerText : false,
          ol = thisClass.is( doc.querySelector( '.seller-card .user-online-indicator.is-online' ) ) ? doc.querySelector( '.seller-card .user-online-indicator.is-online' ).innerText.replace( '·\n', '' ) : false,
          lnk = thisClass.is( doc.querySelector( '.seller-card .username-line .seller-link' ) ) ? doc.querySelector( '.seller-card .username-line .seller-link' ).getAttribute( 'href' ) : false,
          lg = [], skl = [], edu = [], cert = [];
          doc.querySelectorAll( '.user-page-perseus .seller-profile .languages li' ).forEach( function( e, i ) {lg[ i ] = ( typeof e.innerText !== undefined ) ? e.innerText.split( '-' ) : false;} );
          doc.querySelectorAll( '.user-page-perseus .seller-profile .skills ul li' ).forEach( function( e, i ) {var text = e.innerText;if( e.classList.contains( 'verified' ) ) {text = [ text, 'Verified' ];}skl[ i ] = text;} );
          doc.querySelectorAll( '.user-page-perseus .seller-profile .education-list ul li' ).forEach( function( e, i ) {edu[ i ] = ( typeof e.firstElementChild.innerText !== undefined ) ? e.firstElementChild.innerText.split( '\n\n' ) : false;} );
          doc.querySelectorAll( '.user-page-perseus .seller-profile .list:not(.education-list) ul li' ).forEach( function( e, i ) {cert[ i ] = ( typeof e.firstElementChild.innerText !== undefined ) ? e.firstElementChild.innerText.split( '\n\n' ) : false;} );

        var result = {
          info: {
            user: u,
            link: ( typeof lnk !== undefined ) ? 'https://www.fiverr.com' + lnk : false,
            location: l,
            since: ms,
            response: rt,
            delivery: ld,
            online: ol
          },
          rating: {
            rating: r,
            total: t,
            html: rth,
            scl: scl,
            rtf: rtf,
            sad: sad,
            rab: rab,
            rabt: rabt,
            ras: ras,
            rast: rast
          },
          language: lg,
          skills: skl,
          education: edu,
          certification: cert
        };
        return result;
    }
    is( elem ) {
      return ( typeof elem !== undefined && elem !== null && elem );
    }
    filters() {
      /**
       * Special filters for extensions.
       */
      const thisClass = this;
      if( document.querySelectorAll( '.js-fwp-filters' ).length >= 1 ) {return;}
      document.querySelectorAll( '.db-new-main-table table thead tr.header-filter td' ).forEach( function( td, i ) {td.setAttribute( 'colspan', 1 );} );
      var html = '\
      <td colspan="4" class="js-fwp-filters listings-perseus">\
        <div class="floating-menu" data-active="open">\
          <div class="menu-title filter-menu">Filters <span class="XQskgrQ chevron-icon-down" aria-hidden="true" style="width: 10px; height: 10px">\
              <svg width="11" height="7" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg">\
                <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path>\
              </svg>\
            </span>\
          </div>\
          <div class="menu-content">\
            <form class="content-scroll" name="fwpfilter" id="fwpfilter" style="max-height: 264px">\
              ' + thisClass.getFilters( 'all' ) + '\
            </form>\
            <div class="button-row">\
              <a class="clear-all co-text-light" onclick="window.fwpfilter.reset();">Clear All</a>\
              <a class="apply">Apply</a>\
            </div>\
          </div>\
        </div>\
      </td>';
      var td = document.createElement('td');td.setAttribute( 'colspan', 4 );td.classList.add( 'js-fwp-filters', 'listings-perseus' );td.innerHTML = html;
      document.querySelector( '.db-new-main-table table thead tr.header-filter' ).insertBefore( td, document.querySelectorAll( '.db-new-main-table table thead tr.header-filter td' )[ 1 ] );
      thisClass.event();
    }
    event() {
      const thisClass = this;var node;

      document.querySelectorAll( '.listings-perseus .floating-menu > .filter-menu' ).forEach( function( menu, i ) {
        menu.addEventListener( 'click', function( e ) {
            this.parentElement.classList.toggle( 'open' );
        } );
      } );
      node = document.querySelector( '.listings-perseus .floating-menu .menu-content .button-row .apply' );
      node.addEventListener( 'click', function( e ) {
        e.preventDefault();
        var form = document.getElementById( 'fwpfilter' ), formData, values; // window.fwpfilter
        formData = new FormData( form );
        values = [ ...formData.entries() ];
        thisClass.filterOut( values );
      } );

      
    }
    currency( str = '$', tr = 'sign' ) {
      /**
       * Default available country
       */
      var arr = [{"title": "United States Dollar","currency": "USD - $","short": "USD","sign": "$"},{"title": "Euro","currency": "EUR - €","short": "EUR","sign": "€"},{"title": "British Pound","currency": "GBP - £","short": "GBP","sign": "£"},{"title": "Australian Dollar","currency": "AUD - A$","short": "AUD","sign": "A$"},{"title": "Canadian Dollar","currency": "CAD - CA$","short": "CAD","sign": "CA$"},{"title": "Israeli Shekel","currency": "ILS - ₪","short": "ILS","sign": "₪"},{"title": "Brazilian Real","currency": "BRL - R$","short": "BRL","sign": "R$"},{"title": "Hong Kong Dollar","currency": "HKD - HK$","short": "HKD","sign": "HK$"},{"title": "Swedish Krona","currency": "SEK - SEK","short": "SEK","sign": "SEK"},{"title": "New Zealand Dollar","currency": "NZD - NZ$","short": "NZD","sign": "NZ$"},{"title": "Singapore Dollar","currency": "SGD - SGD","short": "SGD","sign": "SGD"},{"title": "Swiss Franc","currency": "CHF - CHF","short": "CHF","sign": "CHF"},{"title": "South African Rand","currency": "ZAR - ZAR","short": "ZAR","sign": "ZAR"},{"title": "Chinese Renminbi Yuan","currency": "CNY - CN¥","short": "CNY","sign": "CN¥"},{"title": "Indian Rupee","currency": "INR - ₹","short": "INR","sign": "₹"},{"title": "Malaysian Ringgit","currency": "MYR - MYR","short": "MYR","sign": "MYR"},{"title": "Mexican Peso","currency": "MXN - MX$","short": "MXN","sign": "MX$"},{"title": "Pakistani Rupee","currency": "PKR - PKR","short": "PKR","sign": "PKR"},{"title": "Philippine Peso","currency": "PHP - ₱","short": "PHP","sign": "₱"},{"title": "New Taiwan Dollar","currency": "TWD - NT$","short": "TWD","sign": "NT$"},{"title": "Thai Baht","currency": "THB - THB","short": "THB","sign": "THB"},{"title": "Turkish New Lira","currency": "TRY - TRY","short": "TRY","sign": "TRY"},{"title": "United Arab Emirates Dirham","currency": "AED - AED","short": "AED","sign": "AED"}];
      // var currency = this.getCurrency();
      var sign = '$';
      // arr.forEach( function( c, i ) {
      //   if( c.currency == str ) {sign = c.sign;}
      // } );
      return sign;
    }
    getCurrency() {
      var currencies = [];
      document.querySelectorAll( '.locale-settings-package .selection-list .item-row.default-currency-item' ).forEach( function( c, i ) {
        var symbol = jQuery( c ).find( '.currency-code-symbol' ).text();sp = symbol.split( ' - ' );
        var cur = {
          title: jQuery( c ).find( '.currency-name' ).text(),
          currency: symbol,
          short: sp[ 0 ],
          sign: sp[ 1 ],
        };
        currencies.push( cur );
      } );
      return currencies;
    }
    checkIf( tr, cnd ) {
      return( tr == 'all' || tr == cnd );
    }
    getFilters( tr = 'all' ) {
      var database = this.database, html = '';const thisClass = this;
      if( thisClass.checkIf( tr, 'budget' ) && thisClass.permit( 'budget' ) ) {
        // Client budget range filter
        html += '\
        <div class="more-filter-item with-carrot">\
          <div class="content-title"> Budget </div>\
          <div class="budget-filter">\
            <div class="price-range-filter">\
              <div class="input-wrapper">\
                <label>MIN.</label>\
                <input type="number" name="range-min" class="min" placeholder="Any" min="0" max="500000" value="" />\
                <i>' + thisClass.currency() + '</i>\
              </div>\
              <div class="input-wrapper">\
                <label>MAX.</label>\
                <input type="number" name="range-max" class="max" placeholder="Any" min="0" max="500000" value="" />\
                <i>' + thisClass.currency() + '</i>\
              </div>\
            </div>\
          </div>\
        </div>';
      }
      if( thisClass.checkIf( tr, 'delivery' ) && thisClass.permit( 'delivery' ) ) {
        // Project Delivery time filter
        html += '\
        <div class="more-filter-item with-carrot delivery">\
          <div class="content-title"> Delivery time </div>\
          <div class="radio-list">';
        database.delivery.forEach( function( e, i ) {
          html += '\
          <div class="radio-item-wrapper">\
            <label class="Yxq3IHR DOMdBU+ radio-item ' + ( ( i == 3 ) ? 'selected' : '' ) + '">\
              <input type="radio" name="delivery" value="' + ( i + 1 ) + '" ' + ( ( i == 3 ) ? 'checked=""' : '' ) + '>\
              <span class="zHaeckV"></span>' + e + '</label>\
          </div>';
        } );
        html += '\
          </div>\
        </div>';
      }
      if( thisClass.checkIf( tr, 'label' ) && thisClass.permit( 'label' ) ) {
        // Client Label, or is it professional account
        html += '\
        <div class="more-filter-item with-carrot label">\
          <div class="content-title"> Client Account Label </div>\
          <div class="checkbox-list">';
        database.label.forEach( function( e, i ) {
          html += '\
          <label class="-SSRhMt zsZmoTB cWwLjTL checkbox">\
              <input type="checkbox" name="label" value="' + ( i + 1 ) + '">\
              <span class="FO1WDvp">\
                <span class="XQskgrQ L8UwSlD" aria-hidden="true" style="width: 10px; height: 10px;">\
                  <svg width="11" height="9" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg">\
                    <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>\
                  </svg>\
                </span>\
              </span>\
              <div class="inner-checkbox">\
                <span class="label">' + e + '</span>\
              </div>\
            </label>';
        } );
        html += '\
          </div>\
        </div>';
      }
      if( thisClass.checkIf( tr, 'lives' ) && thisClass.permit( 'lives' ) ) {
      // Client Country filter.
        html += '\
        <div class="more-filter-item with-carrot lives">\
          <div class="content-title"> Buyer Location </div>\
          <div class="checkbox-list lives">';
        database.lives.forEach( function( e, i ) {
          html += '\
              <label class="-SSRhMt zsZmoTB cWwLjTL checkbox">\
                <input type="checkbox" name="lives" value="' + e[ 1 ] + '" data-short="' + e[ 0 ] + '" ' + ( ( thisClass.is( document.querySelector( '.fwp-js-activate .more-filter-item.with-carrot.lives .checkbox-list.lives [data-short="DE"]' ) ) && document.querySelector( '.fwp-js-activate .more-filter-item.with-carrot.lives .checkbox-list.lives [data-short="DE"]' ).checked === true ) ? 'checked' : '' ) + '>\
                <span class="FO1WDvp">\
                  <span class="XQskgrQ L8UwSlD" aria-hidden="true" style="width: 10px; height: 10px;">\
                    <svg width="11" height="9" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg">\
                      <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>\
                    </svg>\
                  </span>\
                </span>\
                <div class="inner-checkbox">\
                  <span class="label">' + e[ 1 ] + '</span>\
                  ' + ( ( e[ 2 ] ) ? '<span class="count"> (' + e[ 2 ] + ')</span>' : '' ) + '\
                </div>\
              </label>';
        } );
        html += '\
          </div>\
        </div>';
      }
      if( thisClass.checkIf( tr, 'speak' ) && thisClass.permit( 'speak' ) ) {
        // Client Language filter
        html += '\
        <div class="more-filter-item with-carrot speak">\
          <div class="content-title"> Buyer Speaks </div>\
          <div class="checkbox-list">';
        database.speak.forEach( function( e, i ) {
          html += '\
          <label class="-SSRhMt zsZmoTB cWwLjTL checkbox">\
              <input type="checkbox" name="speak" value="' + e[ 0 ] + '">\
              <span class="FO1WDvp">\
                <span class="XQskgrQ L8UwSlD" aria-hidden="true" style="width: 10px; height: 10px;">\
                  <svg width="11" height="9" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg">\
                    <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>\
                  </svg>\
                </span>\
              </span>\
              <div class="inner-checkbox">\
                <span class="label">' + e[ 0 ] + '</span>\
                ' + ( ( e[ 1 ] ) ? '<span class="count"> (' + e[ 1 ] + ')</span>' : '' ) + '\
              </div>\
            </label>';
        } );
        html += '\
          </div>\
        </div>';
      }
      return html;
    }
    updateFilters( tr = 'all' ) {
      const thisClass = this;var tr = 'lives', html, node, selector = '.fwp-js-activate .listings-perseus .floating-menu .menu-content .content-scroll .more-filter-item.with-carrot.' + tr;
      thisClass.getLive( false, true );
      if( thisClass.is( document.querySelector( selector ) ) ) {
        html = thisClass.getFilters( tr );node = document.createElement( 'div' );node.innerHTML = html;html = thisClass.is( node.querySelector( '.more-filter-item.with-carrot.' + tr ) ) ? node.querySelector( '.more-filter-item.with-carrot.' + tr ).innerHTML : html;
        document.querySelector( selector ).innerHTML = html;
      }
    }
    getLive( rtn = true, sort = false ) {
      const thisClass = this;
      var vase = thisClass.base, lives = thisClass.getDatabase().lives, lv = '', output = [], e;
      lives.forEach( function( lv, l ) {
        Object.keys( thisClass.base ).forEach( function( i ) {
          e = vase[ i ];
          if( e.info.location == lv[ 1 ] ) {
            lv[ 2 ] = ( lv[ 2 ] ) ? ( lv[ 2 ] + 1 ) : 1;
            output[ lv[ 0 ] ] = [ lv[ 0 ], lv[ 1 ], lv[ 2 ] ];
          }
        } );
      } );
      lives = [];
      Object.keys( output ).forEach( function( i ) {
        lives.push( output[ i ] );
      } );
      if( sort ) {
        lives.sort( ( a, b ) => ( a[ 2 ] < b[ 2 ] ? 1 : -1 ) ); //For Decending | console.log( lives );
        // lives.sort( ( a, b ) => ( a[ 2 ] > b[ 2 ] ? 1 : -1 ) ); //For Ascending | console.log( lives );
      }
      if( rtn ) {return lives;}
      else {thisClass.database.lives = lives;}
    }
    functions() {
      var arr = [];
      document.querySelectorAll( '.listings-perseus .floating-menu .menu-content .checkbox-list.speak .label' ).forEach( function( e, i ) {arr.push( e.innerText );} );
      console.log( JSON.stringify( arr ) );
    }
    getDatabase() {
      var database = {
        speak: [
          [ "English" ], [ "French" ], [ "Spanish" ], [ "Urdu" ], [ "German" ], [ "Hindi" ], [ "Bengali" ], [ "Arabic" ], [ "Italian" ], [ "Russian" ], [ "Portuguese" ], [ "Punjabi" ], [ "Dutch" ], [ "Ukrainian" ], [ "Gujarati" ], [ "Chinese" ], [ "Turkish" ], [ "Hebrew" ], [ "Tamil" ], [ "Polish" ], [ "Marathi" ], [ "Malayalam" ], [ "Telugu" ], [ "Persian" ], [ "Vietnamese" ], [ "Kannada" ], [ "Thai" ], [ "Oriya" ], [ "Javanese" ], [ "Burmese" ]
        ],
        label: [
          // all lowercase and replace " " with "_"
          "Top Rated Seller", "Level Two", "Level One", "New Seller"
        ],
        lives:   [
          [ "US", "United States" ], [ "GB", "United Kingdom" ], [ "CA", "Canada" ], [ "DE", "Germany" ], [ "AF", "Afghanistan" ], [ "AL", "Albania" ], [ "DZ", "Algeria" ], [ "AO", "Angola" ], [ "AR", "Argentina" ], [ "AM", "Armenia" ], [ "AW", "Aruba" ], [ "AU", "Australia" ], [ "AT", "Austria" ], [ "AZ", "Azerbaijan" ], [ "BS", "Bahamas" ], [ "BH", "Bahrain" ], [ "BD", "Bangladesh" ], [ "BB", "Barbados" ], [ "BY", "Belarus" ], [ "BE", "Belgium" ], [ "BZ", "Belize" ], [ "BJ", "Benin" ], [ "BT", "Bhutan" ], [ "BO", "Bolivia" ], [ "BA", "Bosnia and Herzegovina" ], [ "BR", "Brazil" ], [ "BG", "Bulgaria" ], [ "KH", "Cambodia" ], [ "CM", "Cameroon" ], [ "CL", "Chile" ], [ "CN", "China" ], [ "CO", "Colombia" ], [ "CD", "Congo [DRC]" ], [ "CR", "Costa Rica" ], [ "HR", "Croatia" ], [ "CY", "Cyprus" ], [ "CZ", "Czech Republic" ], [ "DK", "Denmark" ], [ "DO", "Dominican Republic" ], [ "EC", "Ecuador" ], [ "EG", "Egypt" ], [ "SV", "El Salvador" ], [ "EE", "Estonia" ], [ "ET", "Ethiopia" ], [ "FI", "Finland" ], [ "FR", "France" ], [ "PF", "French Polynesia" ], [ "GE", "Georgia" ], [ "GH", "Ghana" ], [ "GR", "Greece" ], [ "GP", "Guadeloupe" ], [ "GU", "Guam" ], [ "GT", "Guatemala" ], [ "GY", "Guyana" ], [ "HT", "Haiti" ], [ "HN", "Honduras" ], [ "HK", "Hong Kong" ], [ "HU", "Hungary" ], [ "IN", "India" ], [ "ID", "Indonesia" ], [ "IE", "Ireland" ], [ "IL", "Israel" ], [ "IT", "Italy" ], [ "CI", "Ivory Coast" ], [ "JM", "Jamaica" ], [ "JP", "Japan" ], [ "JO", "Jordan" ], [ "KZ", "Kazakhstan" ], [ "KE", "Kenya" ], [ "XK", "Kosovo" ], [ "KW", "Kuwait" ], [ "KG", "Kyrgyzstan" ], [ "LV", "Latvia" ], [ "LY", "Libya" ], [ "LT", "Lithuania" ], [ "LU", "Luxembourg" ], [ "MK", "Macedonia [FYROM]" ], [ "MG", "Madagascar" ], [ "MW", "Malawi" ], [ "MY", "Malaysia" ], [ "MT", "Malta" ], [ "MU", "Mauritius" ], [ "MX", "Mexico" ], [ "MD", "Moldova" ], [ "MN", "Mongolia" ], [ "ME", "Montenegro" ], [ "MA", "Morocco" ], [ "MZ", "Mozambique" ], [ "MM", "Myanmar [Burma]" ], [ "NA", "Namibia" ], [ "NP", "Nepal" ], [ "NL", "Netherlands" ], [ "NC", "New Caledonia" ], [ "NZ", "New Zealand" ], [ "NI", "Nicaragua" ], [ "NG", "Nigeria" ], [ "MP", "Northern Mariana Islands" ], [ "NO", "Norway" ], [ "OM", "Oman" ], [ "PK", "Pakistan" ], [ "PS", "Palestinian Territories" ], [ "PA", "Panama" ], [ "PY", "Paraguay" ], [ "PE", "Peru" ], [ "PH", "Philippines" ], [ "PL", "Poland" ], [ "PT", "Portugal" ], [ "PR", "Puerto Rico" ], [ "QA", "Qatar" ], [ "RO", "Romania" ], [ "RU", "Russia" ], [ "RW", "Rwanda" ], [ "LC", "Saint Lucia" ], [ "VC", "Saint Vincent and the Grenadines" ], [ "SA", "Saudi Arabia" ], [ "SN", "Senegal" ], [ "RS", "Serbia" ], [ "SG", "Singapore" ], [ "SK", "Slovakia" ], [ "SI", "Slovenia" ], [ "SO", "Somalia" ], [ "ZA", "South Africa" ], [ "KR", "South Korea" ], [ "ES", "Spain" ], [ "LK", "Sri Lanka" ], [ "SD", "Sudan" ], [ "SZ", "Swaziland" ], [ "SE", "Sweden" ], [ "CH", "Switzerland" ], [ "TW", "Taiwan" ], [ "TJ", "Tajikistan" ], [ "TZ", "Tanzania" ], [ "TH", "Thailand" ], [ "TG", "Togo" ], [ "TT", "Trinidad and Tobago" ], [ "TN", "Tunisia" ], [ "TR", "Turkey" ], [ "UG", "Uganda" ], [ "UA", "Ukraine" ], [ "AE", "United Arab Emirates" ], [ "UY", "Uruguay" ], [ "UZ", "Uzbekistan" ], [ "VE", "Venezuela" ], [ "VN", "Vietnam" ], [ "YE", "Yemen" ], [ "ZM", "Zambia" ], [ "ZW", "Zimbabwe" ]
        ],
        delivery: [
          "Express 24H", "Up to 3 days", "Up to 7 days", "Anytime"
        ],
        flags: [
          "ac", "ad", "ae", "af", "ag", "ai", "al", "am", "ao", "aq", "ar", "as", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bl", "bm", "bn", "bo", "bq", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cc", "cd", "cefta", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cp", "cr", "cu", "cv", "cw", "cx", "cy", "cz", "de", "dg", "dj", "dk", "dm", "do", "dz", "ea", "ec", "ee", "eg", "eh", "er", "es-ct", "es-ga", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb-eng", "gb-nir", "gb-sct", "gb-wls", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "ic", "id", "ie", "il", "im", "in", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mf", "mg", "mh", "mk", "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv", "mw", "mx", "my", "mz", "na", "nc", "ne", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "ss", "st", "sv", "sx", "sy", "sz", "ta", "tc", "td", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "um", "un", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "xk", "xx", "ye", "yt", "za", "zm", "zw"
        ]
      };
      return database;
    }
    permit( e ) {
      // 'label', , 'speak'
      var permit = [ 'budget', 'delivery', 'lives' ];
      return permit.includes( e );
    }
    notice() {}
    flags( e = false ) {
      const thisClass = this;
      var flags = thisClass.database.flags, rtn = ( flags.includes( e.toLowerCase() ) ) ? e.toLowerCase() : 'xx';
      if( e ) {
        thisClass.database.lives.forEach( function( l, i ) {
          if( l[ 1 ].toLowerCase() == e.toLowerCase() ) {rtn = l[ 0 ].toLowerCase();}
        } );
        return rtn;
      } else {
        return flags;
      }
    }
    icons( tr ) {
      const thisClass = this;
      var icons = {
        review: '<svg width="16px" height="15px" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>',
        profile: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="16px" height="15px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve"><path id="XMLID_1253_" d="M46,57.1c14.8,0,26.9-12.1,26.9-27C72.9,15.1,60.8,3,46,3S19.1,15.1,19.1,30C19.1,45,31.2,57.1,46,57.1z   M46,11c10.4,0,18.9,8.5,18.9,19c0,10.5-8.5,19-18.9,19s-18.9-8.5-18.9-19C27.1,19.5,35.6,11,46,11z M58.5,59.7  c-1.3-0.4-2.8-0.1-3.8,0.8L46,67.9l-8.7-7.4c-1.1-0.9-2.5-1.2-3.8-0.8C27.9,61.5,0,71.1,0,85c0,2.2,1.8,4,4,4h84c2.2,0,4-1.8,4-4  C92,71.1,64.1,61.5,58.5,59.7z M10.1,81c4.4-4.7,15-9.9,23.8-12.9l9.5,8.1c1.5,1.3,3.7,1.3,5.2,0l9.5-8.1  c8.8,3.1,19.4,8.3,23.8,12.9H10.1z"/></svg>',
        'online': '<svg width="16px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z" fill="#00ff00"/></svg>',
        'offline': '<svg width="16px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z" fill="#ff0000"/></svg>',
        response: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 488 488" style="enable-background:new 0 0 488 488;" xml:space="preserve" width="16px" height="15px"><g transform="translate(0 -540.36)"><g><g><path d="M351.1,846.96l-97.1-67.9v-116.7c0-5.5-4.5-10-10-10s-10,4.5-10,10v122c0,3.3,1.6,6.3,4.3,8.2l101.4,70.9     c1.7,1.2,3.7,1.8,5.7,1.8v0c3.1,0,6.2-1.5,8.2-4.4C356.7,856.36,355.6,850.16,351.1,846.96z"/><path d="M416.4,611.96L416.4,611.96c-46.2-46.2-107.4-71.6-172.4-71.6s-126.2,25.4-172.4,71.6C25.4,658.16,0,719.36,0,784.36     s25.4,126.2,71.6,172.4c46.2,46.2,107.4,71.6,172.4,71.6s126.2-25.4,172.4-71.6s71.6-107.4,71.6-172.4S462.6,658.16,416.4,611.96     z M254,1008.16L254,1008.16v-40.8c0-5.5-4.5-10-10-10s-10,4.5-10,10v40.8c-115.6-5.1-208.7-98.2-213.8-213.8H61     c5.5,0,10-4.5,10-10s-4.5-10-10-10H20.2c5.1-115.6,98.2-208.7,213.8-213.8v40.8c0,5.5,4.5,10,10,10s10-4.5,10-10v-40.8     c115.6,5.1,208.7,98.2,213.8,213.8H427c-5.5,0-10,4.5-10,10s4.5,10,10,10h40.8C462.7,909.96,369.6,1003.06,254,1008.16z"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
        link: '<svg width="16px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 5a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-9.293 9.293a1 1 0 0 1-1.414-1.414L17.586 5H14zM3 7a2 2 0 0 1 2-2h5a1 1 0 1 1 0 2H5v12h12v-5a1 1 0 1 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" fill="#0D0D0D"/></svg>'
      }, node;
      node = document.createElement( 'span' );node.classList.add( 'fwp-svg-icon' );node.innerHTML = icons.review;
      if( thisClass.is( icons[ tr ] ) ) {
        node.innerHTML = icons[ tr ];
      }
      return node;
    }
    sort( args ) {
      var form = {range: {}, delivery: 3, label: [], lives: [], speak: []};
      args.forEach( function( e, i ) {
        if( e[ 0 ] == 'range-min' || e[ 0 ] == 'range-max' ) {form.range[ e[ 0 ].replace( 'range-', '' ) ] = e[ 1 ];}
        else if( e[ 0 ] == 'delivery' ) {form.delivery = e[ 1 ];}
        else {form[ e[ 0 ] ].push( e[ 1 ] );}
      } );
      return form;
    }
    filterOut( args ) {
      const thisClass = this;
      var args = thisClass.sort( args ),
          vase = thisClass.base,
          output, delivery, e, amount;
      
      args.range.max = ( ! args.range.max || args.range.max == '' ) ? 0 : args.range.max;
      args.range.min = ( ! args.range.min || args.range.min == '' ) ? 0 : args.range.min;
      if( thisClass.permit( 'budget' ) && args.range.max != 0 ) {
        output = {};
        Object.keys( vase ).forEach( function( i ) {
          e = vase[ i ];
          amount = Number( e.meta.budget.replace( thisClass.currency(), '' ) );
          if( args.range.max >= amount && args.range.min <= amount ) {
            output[ i ] = e;
          }
        } );
        vase = output;
      }

      if( thisClass.permit( 'delivery' ) && args.delivery < 4 ) {
        var deliveries = [ '', '24 hours', '3 days', '7 days', 0 ];output = {};
        Object.keys( vase ).forEach( function( i ) {
          e = vase[ i ];
          delivery = e.meta.delivery.split( ' ' );
          if( delivery[ 0 ] <= deliveries[ args.delivery ].split( ' ' )[ 0 ] ) {
            output[ i ] = e;
          }
        } );
        vase = output;
      }

      if( thisClass.permit( 'lives' ) && args.lives.length >= 1 ) {
        output = {};
        args.lives.forEach( function( lv ) {
          Object.keys( vase ).forEach( function( i ) {
            e = vase[ i ];
            if( e.info.location == lv ) {
              output[ i ] = e;
            }
          } );
        } );
        vase = output;
      }
      
      if( thisClass.permit( 'speak' ) && args.speak.length >= 1 ) {
        output = {}, lg;
        args.speak.forEach( function( sk ) {
          Object.keys( vase ).forEach( function( i ) {
            e = vase[ i ];
            e.language.forEach( function( l ) {
              lg = l[ 0 ];
              if( lg.replace( / /g, '' ).toLowerCase() == sk[ 0 ].replace( / /g, '' ).toLowerCase() || sk[ 0 ].contains( lg ) ) {
                output[ i ] = e;
              }
            } );
          } );
        } );
        vase = output;
      }
      
      
      
      console.log( 'Filter', {filters: args, list: thisClass.base} );
      console.log( 'Filtered', vase );

      thisClass.getLists( vase );
    }
    getLists( filtered ) {
      const thisClass = this;
      var tbody = document.querySelector( '.js-db-table.fwp-js-activate table tbody' ), html = '', args, tr, td, span, div, a, itag, node;
      tbody.innerHTML = '';
      if( Object.keys( filtered ).length >= 1 ) {
        Object.keys( filtered ).forEach( function( i ) {
          args = filtered[ i ];
          
          tr = document.createElement( 'tr' );
          tr.setAttribute( 'data-fwpid', args.meta.requestId );
          if( thisClass.is( args.meta.trHtml ) ) {
            tr.innerHTML = args.meta.trHtml;
          } else {
            // Table Data Date <td>
            td = document.createElement( 'td' );
            td.classList.add( 'date' );
            span = document.createElement( 'span' );span.innerHTML = args.meta.requestDate;td.appendChild( span );
            node = document.createElement( 'strong' );node.classList.add( 'extension-requestpage-country' );node.innerText = args.info.location;td.appendChild( node );
            tr.appendChild( td );
            
            // Table Data BUYER <td>
            td = document.createElement( 'td' );
            td.classList.add( 'profile-40', 'height95' );
            span = document.createElement( 'span' );span.classList.add( 'user-pict-40' );span.innerHTML = args.meta.userPict;td.appendChild( span );
            node = document.createElement( 'a' );node.classList.add( 'extension-requestpage-username' );node.href = 'https://www.fiverr.com/' + args.meta.username;node.target = '_blank';node.innerText = args.meta.username;td.appendChild( node );
            tr.appendChild( td );
    
            // Table Data REQUEST <td>
            td = document.createElement( 'td' );
            td.classList.add( 'text-wide' );
            span = document.createElement( 'span' );span.innerText = ( args.meta.requestText.length >= 125 ) ? args.meta.requestText.substr( 0, 125 ) + '...' : args.meta.requestText;
            if( args.meta.requestText.length >= 125 ) {a = document.createElement( 'a' );a.href= '#';a.classList.add( 'is-online', 'btn-see-more', 'js-see-more', 'm-r-10', 'pos-abs' );a.setAttribute( 'data-more', args.meta.requestText );a.innerText = 'See more';a.onclick = function( e ) {e.preventDefault();this.parentNode.innerHTML = this.dataset.more;};itag = document.createElement( 'i' );a.appendChild( itag );span.appendChild( a );}td.appendChild( span );
            if( args.meta.requestTags && args.meta.requestTags.length >= 1 ) {
              div = document.createElement( 'div' );div.classList.add( 'tags-standard', 'tags-white-bg' );
              args.meta.requestTags.forEach( function( tg, i ) {
                span = document.createElement( 'span' );span.innerText = tg;div.appendChild( span );
              } );
              td.appendChild( div );
            }
            tr.appendChild( td );
    
            // Table Data OFFERS <td>
            td = document.createElement( 'td' );
            td.classList.add( 'applications', 't-a-center' );
            span = document.createElement( 'span' );span.innerText = args.meta.offers;td.appendChild( span );
            tr.appendChild( td );
    
            // Table Data DURATION <td>
            td = document.createElement( 'td' );
            td.classList.add( 'hidden-action', 't-a-center', 'with-text' );
            div = document.createElement( 'div' );div.classList.add( 'hover-show' );
            span = document.createElement( 'span' );span.classList.add( 'duration' );span.innerText = args.meta.delivery;div.appendChild( span );
            a = document.createElement( 'a' );a.href = '#';a.setAttribute( 'data-meta', JSON.stringify( {requestId: args.meta.requestId, isProfessional: args.meta.isProfessional} ) );a.classList.add( 'remove-request', 'js-remove-request' );a.innerText = 'Remove Request';div.appendChild( a );
            td.appendChild( div );
            div = document.createElement( 'div' );div.classList.add( 'hover-hide' );
            span = document.createElement( 'span' );span.innerText = args.meta.delivery;div.appendChild( span );
            td.appendChild( div );tr.appendChild( td );
    
            // Table Data BUDGET <td>
            td = document.createElement( 'td' );
            td.classList.add( 'hidden-action', 't-a-center', 'with-text' );
            div = document.createElement( 'div' );div.classList.add( 'hover-show' );
            span = document.createElement( 'span' );span.classList.add( 'budget' );span.innerText = args.meta.budget;div.appendChild( span );
            if( ! args.meta.requestStatus ) {a = document.createElement( 'a' );a.href = '#';a.setAttribute( 'data-meta', JSON.stringify( args.meta ) );a.classList.add( 'btn-standard', 'btn-green-grad', 'js-send-offer' );a.innerText = 'Send Offer';div.appendChild( a );} else {
              span = document.createElement( 'span' );span.innerText = 'Offer Sent';itag = document.createElement( 'i' );itag.classList.add( 'fa', 'fa-reply' );span.appendChild( itag );div.appendChild( span );
            }
    
            td.appendChild( div );
            div = document.createElement( 'div' );div.classList.add( 'hover-hide' );
            span = document.createElement( 'span' );span.innerText = args.meta.budget;div.appendChild( span );
            td.appendChild( div );tr.appendChild( td );
          }
          tbody.appendChild( tr );
        } );
      } else {
        tr = document.createElement( 'tr' );
        tr.setAttribute( 'data-empty', true );
        tr.classList.add( 'extension-requestpage-empty')

        // Table Data Date <td>
        td = document.createElement( 'td' );
        td.classList.add( 'empty' );
        td.setAttribute( 'colspan', 6 );
        // td.setAttribute( 'align', 'center' );
        td.innerText = 'Nothing found there.';
        
        tr.appendChild( td );
        tbody.appendChild( tr );
      }
    }
    clean( tr = false ) {
      const thisClass = this;
      if( ! tr ) {
        var vase = thisClass.base, e, base = [];
        Object.keys( vase ).forEach( function( i ) {
          e = vase[ i ];
          if( e.meta.requestStatus === false ) {
            base[ i ] = e;
          }
        } );
        thisClass.base = base;
      } else {
        thisClass.base = {};
      }
    }
	}
  // Execute functions
  new buyerRequestDetails();
} )( jQuery );