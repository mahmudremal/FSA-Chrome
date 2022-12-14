( function ( $ ) {
	class buyerRequestDetails {
		constructor() {
      this.user = {
        currency: this.is( document.querySelector( '.locale-settings-package .currency-selection-trigger' ) ) ? this.currency( document.querySelector( '.locale-settings-package .currency-selection-trigger' ).innerText ) : '$'
      }
      this.base = {};this.request = [];this.database = this.getDatabase();
      this.isCDN = false;this.isDef = false;this.me = 'mahmud_remal';
      this.init();
		}
    init() {
			// this.dev();
      this.trigger();
      this.filters();
      this.keyboard();
      // this.loadMore();
      this.loadAll();
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
        // http://blogs.longwin.com.tw/lifetype/key_codes.html
        // Ctrl + Alt + Shift + U shortcut for delete all from Junk
        if( e.ctrlKey && e.altKey && e.shiftKey && e.which == 85 ) {
          thisClass.clean( true ); // parametar is if it is all delete? efault: False
        // Ctrl + Alt + U shortcut for delete all which are replied.
        } else if ( e.ctrlKey && e.altKey && e.which == 85 ) {
          thisClass.clean( false );
        } else {}
      } );
    }
    css() {
      return '';
    }
    trigger() {
      const thisClass = this;
      document.querySelector( '.js-db-table' ).classList.add( 'fwp-js-activate' );
      if( thisClass.isCDN ) {var link = document.createElement( 'link' );link.href = 'https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css';link.rel = 'stylesheet';document.head.appendChild( link );}
      setInterval( () => {
        thisClass.load();
      }, 5000 );
    }
    load() {
      const thisClass = this;var e;
      document.querySelectorAll( '.js-db-table table tbody tr' ).forEach( function( e, i ) {
        if( ! thisClass.is( e.dataset.fwpid ) ) {
          thisClass.request[ e.dataset.id ] = e;
        }
      } );
      Object.keys( thisClass.request ).forEach( function( i ) {
        e = thisClass.request[ i ];
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
  
            if( ! thisClass.isDef ) {thisClass.fetch( meta, e );} else {thisClass.frame( meta, e );}
  
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
    fetch( meta, e ) {
      const thisClass = this;var data;
      if( ! meta.requestId ) {return;}
      e.setAttribute( 'data-fwpid', meta.requestId );
      meta.trHtml = e.innerHTML;
      $.ajax( {
        url: "https://www.fiverr.com/inbox/contacts/" + meta.username + "/info",
        dataType: 'json',
        success: function( result ) {
          data = result;
          result = thisClass.fetchScrap( meta, result, e );
          thisClass.execute( result, e );
          thisClass.updateFilters( 'all' );
        },
        error: function( err ) {
          console.log( 'Some error detected', err );
          if( ! thisClass.is( e.getAttribute( 'data-tried' ) ) ) {e.setAttribute( 'data-tried', 1 );}
          if( Number( e.getAttribute( 'data-tried' ) ) <= 3 ) {e.removeAttribute( 'data-fwpid' );e.setAttribute( 'data-tried', ( Number( e.getAttribute( 'data-tried' ) ) + 1 ) );}
          thisClass.request[ e.dataset.fwpid ] = e;
        }
      } );
    }
    frame( meta, data, e ) {
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
        },
        error: function( err ) {
          console.log( 'Some error detected', err );
          if( ! thisClass.is( e.getAttribute( 'data-tried' ) ) ) {e.setAttribute( 'data-tried', 1 );}
          if( Number( e.getAttribute( 'data-tried' ) ) <= 3 ) {e.removeAttribute( 'data-fwpid' );e.setAttribute( 'data-tried', ( Number( e.getAttribute( 'data-tried' ) ) + 1 ) );}
          thisClass.request[ e.dataset.fwpid ] = e;
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
        if( thisClass.isCDN ) {i = document.createElement( 'i' );i.classList.add( 'fwp-c-location', 'fi', 'fi-' + thisClass.flags( args.info.location ) );e.querySelector( 'td.date .fwp-tr-td' ).appendChild( i );} else {i = document.createElement( 'img' );i.classList.add( 'fwp-c-location' );i.src = thisClass.flags( args.info.location );e.querySelector( 'td.date .fwp-tr-td' ).appendChild( i );}

        node = document.createElement( 'span' );node.classList.add( 'fwp-c-location' );node.innerText = ( args.info.location ) ? args.info.location : 'N/A';
        e.querySelector( 'td.date .fwp-tr-td' ).appendChild( node );
      }
      
      // Insert Buyer Account date after USER Image.
      if( e.querySelectorAll( 'td.profile-40 .fwp-c-date' ).length <= 0 ) {
        node = document.createElement( 'a' );node.classList.add( 'fwp-c-name' );node.href = 'https://www.fiverr.com/' + args.meta.username;node.target = '_blank';node.innerText = args.meta.username;e.querySelector( 'td.profile-40' ).appendChild( node );
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

        span = document.createElement( 'span' );span.innerText = thisClass.is( args.rating.rab ) ? parseFloat( args.rating.rab ).toFixed( 1 ) + '' + ( thisClass.is( args.rating.rabt ) ? ( ! isNaN( args.rating.rabt ) ? '(' + args.rating.rabt + ')' : args.rating.rabt ) : '' ) : 'None';div1.appendChild( span );
        span = document.createElement( 'span' );span.innerText = thisClass.is( args.rating.ras ) ? parseFloat( args.rating.ras ).toFixed( 1 ) + '' + ( thisClass.is( args.rating.rast ) ? ( ! isNaN( args.rating.rast ) ? '(' + args.rating.rast + ')' : args.rating.rast ) : '' ) : 'None';div2.appendChild( span );
        
        div.appendChild( div1 );div.appendChild( div2 );
        e.querySelector( 'td.text-wide .fwp-tr-td, td.see-more .fwp-tr-td' ).appendChild( div );
      }
      
      // Insert Buyer Responding time after OFFERS SENT.
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
      thisClass.request[ e.dataset.fwpid ] = e;
    }
    fetchScrap( meta, result, e ) {
      const thisClass = this;var data, r = result, lang = [];;

      if( thisClass.is( r.languages ) ) {
        r.languages.forEach( function( l, i ) {
          lang.push( [ ( thisClass.is( thisClass.database.langs[ l.language ] ) ? thisClass.database.langs[ l.language ].name : l.language ), l.level ] );
        } );
      }
      data = {
        info: {
          user: meta.username,
          link: 'https://www.fiverr.com/' + meta.username,
          location: thisClass.is( r.country ) ? r.country : false,
          locationShort: thisClass.is( r.countryCode ) ? r.countryCode : false,
          since: thisClass.is( r.memberSince ) ? new Date( r.memberSince * 1000 ).toLocaleDateString( "en-US", { year: 'numeric', month: 'short' } ) : false, // https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript
          response: thisClass.is( r.avgResponseTimeInHours ) ? r.avgResponseTimeInHours + ' ' + ( ( r.avgResponseTimeInHours <= 1 ) ? 'Hour' : 'Hours' ) : false,
          delivery: thisClass.is( r.lastDelivery ) ? r.lastDelivery : false,
          online: thisClass.is( ! r.isAway ) ? 'Online' : false
        },
        rating: {
          rating: thisClass.is( r.starsRating ) ? r.starsRating : false,
          total: thisClass.is( r.ratingsCount ) ? r.ratingsCount : false,
          html: thisClass.is( r.avgRatingHtml ) ? r.avgRatingHtml : false,
          scl: thisClass.is( r.sellerCommunicationLevel ) ? r.sellerCommunicationLevel : false,
          rtf: thisClass.is( r.recommendToaFriend ) ? r.recommendToaFriend : false,
          sad: thisClass.is( r.sellerDeliveryLevel ) ? r.sellerDeliveryLevel : false,
          
          rab: thisClass.is( r.sellingReviews ) ? r.sellingReviews.valuationsAverage : false,
          rabt: thisClass.is( r.sellingReviews ) ? r.sellingReviews.totalCount : false,
          ras: r.starsRating,
          rast: r.ratingsCount
          
        },
        language: lang,
        skills: [],
        education: [],
        certification: [],
        meta: meta
      };
      
      thisClass.base[ meta.requestId ] = data;
      return data;
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
          ol = thisClass.is( doc.querySelector( '.seller-card .user-online-indicator.is-online' ) ) ? doc.querySelector( '.seller-card .user-online-indicator.is-online' ).innerText.replace( '??\n', '' ) : false,
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
      const thisClass = this;var td, tr, div, span, a, i;
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

      div = [ '.db-new-main-table table thead tr.header-filter', '.db-new-main-table table thead tr.header-filter td' ];

      td = document.createElement( 'td' );td.setAttribute( 'colspan', 1 );a = document.createElement( 'a' );a.href = '#';a.classList.add( 'js-fwp-load-all-btn' );a.innerHTML = 'Load All';a.appendChild( document.createElement( 'i' ) );td.appendChild( a );
      document.querySelector( div[ 0 ] ).insertBefore( td, document.querySelectorAll( div[ 1 ] )[ 1 ] );
      
      td = document.createElement( 'td' );td.setAttribute( 'colspan', 3 );td.classList.add( 'js-fwp-filters', 'listings-perseus' );td.innerHTML = html;
      document.querySelector( div[ 0 ] ).insertBefore( td, document.querySelectorAll( div[ 1 ] )[ 1 ] );
      

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
      var arr = [{"title": "United States Dollar","currency": "USD - $","short": "USD","sign": "$"},{"title": "Euro","currency": "EUR - ???","short": "EUR","sign": "???"},{"title": "British Pound","currency": "GBP - ??","short": "GBP","sign": "??"},{"title": "Australian Dollar","currency": "AUD - A$","short": "AUD","sign": "A$"},{"title": "Canadian Dollar","currency": "CAD - CA$","short": "CAD","sign": "CA$"},{"title": "Israeli Shekel","currency": "ILS - ???","short": "ILS","sign": "???"},{"title": "Brazilian Real","currency": "BRL - R$","short": "BRL","sign": "R$"},{"title": "Hong Kong Dollar","currency": "HKD - HK$","short": "HKD","sign": "HK$"},{"title": "Swedish Krona","currency": "SEK - SEK","short": "SEK","sign": "SEK"},{"title": "New Zealand Dollar","currency": "NZD - NZ$","short": "NZD","sign": "NZ$"},{"title": "Singapore Dollar","currency": "SGD - SGD","short": "SGD","sign": "SGD"},{"title": "Swiss Franc","currency": "CHF - CHF","short": "CHF","sign": "CHF"},{"title": "South African Rand","currency": "ZAR - ZAR","short": "ZAR","sign": "ZAR"},{"title": "Chinese Renminbi Yuan","currency": "CNY - CN??","short": "CNY","sign": "CN??"},{"title": "Indian Rupee","currency": "INR - ???","short": "INR","sign": "???"},{"title": "Malaysian Ringgit","currency": "MYR - MYR","short": "MYR","sign": "MYR"},{"title": "Mexican Peso","currency": "MXN - MX$","short": "MXN","sign": "MX$"},{"title": "Pakistani Rupee","currency": "PKR - PKR","short": "PKR","sign": "PKR"},{"title": "Philippine Peso","currency": "PHP - ???","short": "PHP","sign": "???"},{"title": "New Taiwan Dollar","currency": "TWD - NT$","short": "TWD","sign": "NT$"},{"title": "Thai Baht","currency": "THB - THB","short": "THB","sign": "THB"},{"title": "Turkish New Lira","currency": "TRY - TRY","short": "TRY","sign": "TRY"},{"title": "United Arab Emirates Dirham","currency": "AED - AED","short": "AED","sign": "AED"}];
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
                <input type="checkbox" name="lives" value="' + e[ 1 ] + '" data-short="' + e[ 0 ] + '" ' + ( ( thisClass.is( document.querySelector( '.fwp-js-activate .more-filter-item.with-carrot.lives .checkbox-list.lives [data-short="' + e[ 0 ] + '"]' ) ) && document.querySelector( '.fwp-js-activate .more-filter-item.with-carrot.lives .checkbox-list.lives [data-short="' + e[ 0 ] + '"]' ).checked === true ) ? 'checked' : '' ) + '>\
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
        lives.sort( ( a, b ) => ( a[ 2 ] < b[ 2 ] ? 1 : -1 ) ); //For Decending
        // lives.sort( ( a, b ) => ( a[ 2 ] > b[ 2 ] ? 1 : -1 ) ); //For Ascending
      }
      if( rtn ) {return lives;}
      else {thisClass.database.lives = lives;}
    }
    functions() {
      const thisClass = this;
      var arr = [];
      document.querySelectorAll( '.listings-perseus .floating-menu .menu-content .checkbox-list.speak .label' ).forEach( function( e, i ) {arr.push( e.innerText );} );
      console.log( JSON.stringify( arr ) );
      var country = [], e;
      Object.keys( flags ).forEach( function( i ) {
          e = flags[ i ];
          country.push( [ i, e ] );
      } );
      console.log( country );
      
      var fetchMoviesJSON = async function() {
        var response = await fetch(
          'https://www.fiverr.com/users/' + thisClass.me + '/requests?current_filter=active&page=1&per_page=15',
          {
          "credentials": "include",
          "headers": {
          "Accept": "text/javascript",
          "Accept-Language": "en-US,en;q=0.5",
          },
          "referrer": 'https://www.fiverr.com/users/' + thisClass.me + '/requests',
          "method": "GET",
          "mode": "cors"
          } );
        return await response.json();
      }
      fetchMoviesJSON().then( json => {
        console.log( json );
      } );
      // 

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
          ["ad","Andorra"], ["ae","United Arab Emirates"], ["af","Afghanistan"], ["ag","Antigua and Barbuda"], ["ai","Anguilla"], ["al","Albania"], ["am","Armenia"], ["ao","Angola"], ["aq","Antarctica"], ["ar","Argentina"], ["as","American Samoa"], ["at","Austria"], ["au","Australia"], ["aw","Aruba"], ["ax","??land Islands"], ["az","Azerbaijan"], ["ba","Bosnia and Herzegovina"], ["bb","Barbados"], ["bd","Bangladesh"], ["be","Belgium"], ["bf","Burkina Faso"], ["bg","Bulgaria"], ["bh","Bahrain"], ["bi","Burundi"], ["bj","Benin"], ["bl","Saint Barth??lemy"], ["bm","Bermuda"], ["bn","Brunei"], ["bo","Bolivia"], ["bq","Caribbean Netherlands"], ["br","Brazil"], ["bs","Bahamas"], ["bt","Bhutan"], ["bv","Bouvet Island"], ["bw","Botswana"], ["by","Belarus"], ["bz","Belize"], ["ca","Canada"], ["cc","Cocos (Keeling) Islands"], ["cd","DR Congo"], ["cf","Central African Republic"], ["cg","Republic of the Congo"], ["ch","Switzerland"], ["ci","C??te d'Ivoire (Ivory Coast)"], ["ck","Cook Islands"], ["cl","Chile"], ["cm","Cameroon"], ["cn","China"], ["co","Colombia"], ["cr","Costa Rica"], ["cu","Cuba"], ["cv","Cape Verde"], ["cw","Cura??ao"], ["cx","Christmas Island"], ["cy","Cyprus"], ["cz","Czechia"], ["de","Germany"], ["dj","Djibouti"], ["dk","Denmark"], ["dm","Dominica"], ["do","Dominican Republic"], ["dz","Algeria"], ["ec","Ecuador"], ["ee","Estonia"], ["eg","Egypt"], ["eh","Western Sahara"], ["er","Eritrea"], ["es","Spain"], ["et","Ethiopia"], ["eu","European Union"], ["fi","Finland"], ["fj","Fiji"], ["fk","Falkland Islands"], ["fm","Micronesia"], ["fo","Faroe Islands"], ["fr","France"], ["ga","Gabon"], ["gb","United Kingdom"], ["gb-eng","England"], ["gb-nir","Northern Ireland"], ["gb-sct","Scotland"], ["gb-wls","Wales"], ["gd","Grenada"], ["ge","Georgia"], ["gf","French Guiana"], ["gg","Guernsey"], ["gh","Ghana"], ["gi","Gibraltar"], ["gl","Greenland"], ["gm","Gambia"], ["gn","Guinea"], ["gp","Guadeloupe"], ["gq","Equatorial Guinea"], ["gr","Greece"], ["gs","South Georgia"], ["gt","Guatemala"], ["gu","Guam"], ["gw","Guinea-Bissau"], ["gy","Guyana"], ["hk","Hong Kong"], ["hm","Heard Island and McDonald Islands"], ["hn","Honduras"], ["hr","Croatia"], ["ht","Haiti"], ["hu","Hungary"], ["id","Indonesia"], ["ie","Ireland"], ["il","Israel"], ["im","Isle of Man"], ["in","India"], ["io","British Indian Ocean Territory"], ["iq","Iraq"], ["ir","Iran"], ["is","Iceland"], ["it","Italy"], ["je","Jersey"], ["jm","Jamaica"], ["jo","Jordan"], ["jp","Japan"], ["ke","Kenya"], ["kg","Kyrgyzstan"], ["kh","Cambodia"], ["ki","Kiribati"], ["km","Comoros"], ["kn","Saint Kitts and Nevis"], ["kp","North Korea"], ["kr","South Korea"], ["kw","Kuwait"], ["ky","Cayman Islands"], ["kz","Kazakhstan"], ["la","Laos"], ["lb","Lebanon"], ["lc","Saint Lucia"], ["li","Liechtenstein"], ["lk","Sri Lanka"], ["lr","Liberia"], ["ls","Lesotho"], ["lt","Lithuania"], ["lu","Luxembourg"], ["lv","Latvia"], ["ly","Libya"], ["ma","Morocco"], ["mc","Monaco"], ["md","Moldova"], ["me","Montenegro"], ["mf","Saint Martin"], ["mg","Madagascar"], ["mh","Marshall Islands"], ["mk","North Macedonia"], ["ml","Mali"], ["mm","Myanmar"], ["mn","Mongolia"], ["mo","Macau"], ["mp","Northern Mariana Islands"], ["mq","Martinique"], ["mr","Mauritania"], ["ms","Montserrat"], ["mt","Malta"], ["mu","Mauritius"], ["mv","Maldives"], ["mw","Malawi"], ["mx","Mexico"], ["my","Malaysia"], ["mz","Mozambique"], ["na","Namibia"], ["nc","New Caledonia"], ["ne","Niger"], ["nf","Norfolk Island"], ["ng","Nigeria"], ["ni","Nicaragua"], ["nl","Netherlands"], ["no","Norway"], ["np","Nepal"], ["nr","Nauru"], ["nu","Niue"], ["nz","New Zealand"], ["om","Oman"], ["pa","Panama"], ["pe","Peru"], ["pf","French Polynesia"], ["pg","Papua New Guinea"], ["ph","Philippines"], ["pk","Pakistan"], ["pl","Poland"], ["pm","Saint Pierre and Miquelon"], ["pn","Pitcairn Islands"], ["pr","Puerto Rico"], ["ps","Palestine"], ["pt","Portugal"], ["pw","Palau"], ["py","Paraguay"], ["qa","Qatar"], ["re","R??union"], ["ro","Romania"], ["rs","Serbia"], ["ru","Russia"], ["rw","Rwanda"], ["sa","Saudi Arabia"], ["sb","Solomon Islands"], ["sc","Seychelles"], ["sd","Sudan"], ["se","Sweden"], ["sg","Singapore"], ["sh","Saint Helena, Ascension and Tristan da Cunha"], ["si","Slovenia"], ["sj","Svalbard and Jan Mayen"], ["sk","Slovakia"], ["sl","Sierra Leone"], ["sm","San Marino"], ["sn","Senegal"], ["so","Somalia"], ["sr","Suriname"], ["ss","South Sudan"], ["st","S??o Tom?? and Pr??ncipe"], ["sv","El Salvador"], ["sx","Sint Maarten"], ["sy","Syria"], ["sz","Eswatini (Swaziland)"], ["tc","Turks and Caicos Islands"], ["td","Chad"], ["tf","French Southern and Antarctic Lands"], ["tg","Togo"], ["th","Thailand"], ["tj","Tajikistan"], ["tk","Tokelau"], ["tl","Timor-Leste"], ["tm","Turkmenistan"], ["tn","Tunisia"], ["to","Tonga"], ["tr","Turkey"], ["tt","Trinidad and Tobago"], ["tv","Tuvalu"], ["tw","Taiwan"], ["tz","Tanzania"], ["ua","Ukraine"], ["ug","Uganda"], ["um","United States Minor Outlying Islands"], ["un","United Nations"], ["us","United States"], ["us-ak","Alaska"], ["us-al","Alabama"], ["us-ar","Arkansas"], ["us-az","Arizona"], ["us-ca","California"], ["us-co","Colorado"], ["us-ct","Connecticut"], ["us-de","Delaware"], ["us-fl","Florida"], ["us-ga","Georgia"], ["us-hi","Hawaii"], ["us-ia","Iowa"], ["us-id","Idaho"], ["us-il","Illinois"], ["us-in","Indiana"], ["us-ks","Kansas"], ["us-ky","Kentucky"], ["us-la","Louisiana"], ["us-ma","Massachusetts"], ["us-md","Maryland"], ["us-me","Maine"], ["us-mi","Michigan"], ["us-mn","Minnesota"], ["us-mo","Missouri"], ["us-ms","Mississippi"], ["us-mt","Montana"], ["us-nc","North Carolina"], ["us-nd","North Dakota"], ["us-ne","Nebraska"], ["us-nh","New Hampshire"], ["us-nj","New Jersey"], ["us-nm","New Mexico"], ["us-nv","Nevada"], ["us-ny","New York"], ["us-oh","Ohio"], ["us-ok","Oklahoma"], ["us-or","Oregon"], ["us-pa","Pennsylvania"], ["us-ri","Rhode Island"], ["us-sc","South Carolina"], ["us-sd","South Dakota"], ["us-tn","Tennessee"], ["us-tx","Texas"], ["us-ut","Utah"], ["us-va","Virginia"], ["us-vt","Vermont"], ["us-wa","Washington"], ["us-wi","Wisconsin"], ["us-wv","West Virginia"], ["us-wy","Wyoming"], ["uy","Uruguay"], ["uz","Uzbekistan"], ["va","Vatican City (Holy See)"], ["vc","Saint Vincent and the Grenadines"], ["ve","Venezuela"], ["vg","British Virgin Islands"], ["vi","United States Virgin Islands"], ["vn","Vietnam"], ["vu","Vanuatu"], ["wf","Wallis and Futuna"], ["ws","Samoa"], ["xk","Kosovo"], ["ye","Yemen"], ["yt","Mayotte"], ["za","South Africa"], ["zm","Zambia"], ["zw","Zimbabwe"]
        ],
        langs: {
          "ab":{"name":"Abkhaz", "nativeName":"??????????"},
          "aa":{"name":"Afar", "nativeName":"Afaraf"},
          "af":{"name":"Afrikaans", "nativeName":"Afrikaans"},
          "ak":{"name":"Akan", "nativeName":"Akan"},
          "sq":{"name":"Albanian", "nativeName":"Shqip"},
          "am":{"name":"Amharic", "nativeName":"????????????"},
          "ar":{"name":"Arabic", "nativeName":"??????????????"},
          "an":{"name":"Aragonese", "nativeName":"Aragon??s"},
          "hy":{"name":"Armenian", "nativeName":"??????????????"},
          "as":{"name":"Assamese", "nativeName":"?????????????????????"},
          "av":{"name":"Avaric", "nativeName":"???????? ????????, ???????????????? ????????"},
          "ae":{"name":"Avestan", "nativeName":"avesta"},
          "ay":{"name":"Aymara", "nativeName":"aymar aru"},
          "az":{"name":"Azerbaijani", "nativeName":"az??rbaycan dili"},
          "bm":{"name":"Bambara", "nativeName":"bamanankan"},
          "ba":{"name":"Bashkir", "nativeName":"?????????????? ????????"},
          "eu":{"name":"Basque", "nativeName":"euskara, euskera"},
          "be":{"name":"Belarusian", "nativeName":"????????????????????"},
          "bn":{"name":"Bengali", "nativeName":"???????????????"},
          "bh":{"name":"Bihari", "nativeName":"?????????????????????"},
          "bi":{"name":"Bislama", "nativeName":"Bislama"},
          "bs":{"name":"Bosnian", "nativeName":"bosanski jezik"},
          "br":{"name":"Breton", "nativeName":"brezhoneg"},
          "bg":{"name":"Bulgarian", "nativeName":"?????????????????? ????????"},
          "my":{"name":"Burmese", "nativeName":"???????????????"},
          "ca":{"name":"Catalan; Valencian", "nativeName":"Catal??"},
          "ch":{"name":"Chamorro", "nativeName":"Chamoru"},
          "ce":{"name":"Chechen", "nativeName":"?????????????? ????????"},
          "ny":{"name":"Chichewa; Chewa; Nyanja", "nativeName":"chiChe??a, chinyanja"},
          "zh":{"name":"Chinese", "nativeName":"?????? (Zh??ngw??n), ??????, ??????"},
          "cv":{"name":"Chuvash", "nativeName":"?????????? ??????????"},
          "kw":{"name":"Cornish", "nativeName":"Kernewek"},
          "co":{"name":"Corsican", "nativeName":"corsu, lingua corsa"},
          "cr":{"name":"Cree", "nativeName":"?????????????????????"},
          "hr":{"name":"Croatian", "nativeName":"hrvatski"},
          "cs":{"name":"Czech", "nativeName":"??esky, ??e??tina"},
          "da":{"name":"Danish", "nativeName":"dansk"},
          "dv":{"name":"Divehi; Dhivehi; Maldivian;", "nativeName":"????????????"},
          "nl":{"name":"Dutch", "nativeName":"Nederlands, Vlaams"},
          "en":{"name":"English", "nativeName":"English"},
          "eo":{"name":"Esperanto", "nativeName":"Esperanto"},
          "et":{"name":"Estonian", "nativeName":"eesti, eesti keel"},
          "ee":{"name":"Ewe", "nativeName":"E??egbe"},
          "fo":{"name":"Faroese", "nativeName":"f??royskt"},
          "fj":{"name":"Fijian", "nativeName":"vosa Vakaviti"},
          "fi":{"name":"Finnish", "nativeName":"suomi, suomen kieli"},
          "fr":{"name":"French", "nativeName":"fran??ais, langue fran??aise"},
          "ff":{"name":"Fula; Fulah; Pulaar; Pular", "nativeName":"Fulfulde, Pulaar, Pular"},
          "gl":{"name":"Galician", "nativeName":"Galego"},
          "ka":{"name":"Georgian", "nativeName":"?????????????????????"},
          "de":{"name":"German", "nativeName":"Deutsch"},
          "el":{"name":"Greek, Modern", "nativeName":"????????????????"},
          "gn":{"name":"Guaran??", "nativeName":"Ava??e???"},
          "gu":{"name":"Gujarati", "nativeName":"?????????????????????"},
          "ht":{"name":"Haitian; Haitian Creole", "nativeName":"Krey??l ayisyen"},
          "ha":{"name":"Hausa", "nativeName":"Hausa, ????????????"},
          "he":{"name":"Hebrew (modern)", "nativeName":"??????????"},
          "hz":{"name":"Herero", "nativeName":"Otjiherero"},
          "hi":{"name":"Hindi", "nativeName":"??????????????????, ???????????????"},
          "ho":{"name":"Hiri Motu", "nativeName":"Hiri Motu"},
          "hu":{"name":"Hungarian", "nativeName":"Magyar"},
          "ia":{"name":"Interlingua", "nativeName":"Interlingua"},
          "id":{"name":"Indonesian", "nativeName":"Bahasa Indonesia"},
          "ie":{"name":"Interlingue", "nativeName":"Originally called Occidental; then Interlingue after WWII"},
          "ga":{"name":"Irish", "nativeName":"Gaeilge"},
          "ig":{"name":"Igbo", "nativeName":"As???s??? Igbo"},
          "ik":{"name":"Inupiaq", "nativeName":"I??upiaq, I??upiatun"},
          "io":{"name":"Ido", "nativeName":"Ido"},
          "is":{"name":"Icelandic", "nativeName":"??slenska"},
          "it":{"name":"Italian", "nativeName":"Italiano"},
          "iu":{"name":"Inuktitut", "nativeName":"??????????????????"},
          "ja":{"name":"Japanese", "nativeName":"????????? (??????????????????????????????)"},
          "jv":{"name":"Javanese", "nativeName":"basa Jawa"},
          "kl":{"name":"Kalaallisut, Greenlandic", "nativeName":"kalaallisut, kalaallit oqaasii"},
          "kn":{"name":"Kannada", "nativeName":"???????????????"},
          "kr":{"name":"Kanuri", "nativeName":"Kanuri"},
          "ks":{"name":"Kashmiri", "nativeName":"?????????????????????, ???????????????"},
          "kk":{"name":"Kazakh", "nativeName":"?????????? ????????"},
          "km":{"name":"Khmer", "nativeName":"???????????????????????????"},
          "ki":{"name":"Kikuyu, Gikuyu", "nativeName":"G??k??y??"},
          "rw":{"name":"Kinyarwanda", "nativeName":"Ikinyarwanda"},
          "ky":{"name":"Kirghiz, Kyrgyz", "nativeName":"???????????? ????????"},
          "kv":{"name":"Komi", "nativeName":"???????? ??????"},
          "kg":{"name":"Kongo", "nativeName":"KiKongo"},
          "ko":{"name":"Korean", "nativeName":"????????? (?????????), ????????? (?????????)"},
          "ku":{"name":"Kurdish", "nativeName":"Kurd??, ?????????????"},
          "kj":{"name":"Kwanyama, Kuanyama", "nativeName":"Kuanyama"},
          "la":{"name":"Latin", "nativeName":"latine, lingua latina"},
          "lb":{"name":"Luxembourgish, Letzeburgesch", "nativeName":"L??tzebuergesch"},
          "lg":{"name":"Luganda", "nativeName":"Luganda"},
          "li":{"name":"Limburgish, Limburgan, Limburger", "nativeName":"Limburgs"},
          "ln":{"name":"Lingala", "nativeName":"Ling??la"},
          "lo":{"name":"Lao", "nativeName":"?????????????????????"},
          "lt":{"name":"Lithuanian", "nativeName":"lietuvi?? kalba"},
          "lu":{"name":"Luba-Katanga", "nativeName":""},
          "lv":{"name":"Latvian", "nativeName":"latvie??u valoda"},
          "gv":{"name":"Manx", "nativeName":"Gaelg, Gailck"},
          "mk":{"name":"Macedonian", "nativeName":"???????????????????? ??????????"},
          "mg":{"name":"Malagasy", "nativeName":"Malagasy fiteny"},
          "ms":{"name":"Malay", "nativeName":"bahasa Melayu, ???????? ?????????????"},
          "ml":{"name":"Malayalam", "nativeName":"??????????????????"},
          "mt":{"name":"Maltese", "nativeName":"Malti"},
          "mi":{"name":"M??ori", "nativeName":"te reo M??ori"},
          "mr":{"name":"Marathi (Mar?????h??)", "nativeName":"???????????????"},
          "mh":{"name":"Marshallese", "nativeName":"Kajin M??aje??"},
          "mn":{"name":"Mongolian", "nativeName":"????????????"},
          "na":{"name":"Nauru", "nativeName":"Ekakair?? Naoero"},
          "nv":{"name":"Navajo, Navaho", "nativeName":"Din?? bizaad, Din??k??eh????"},
          "nb":{"name":"Norwegian Bokm??l", "nativeName":"Norsk bokm??l"},
          "nd":{"name":"North Ndebele", "nativeName":"isiNdebele"},
          "ne":{"name":"Nepali", "nativeName":"??????????????????"},
          "ng":{"name":"Ndonga", "nativeName":"Owambo"},
          "nn":{"name":"Norwegian Nynorsk", "nativeName":"Norsk nynorsk"},
          "no":{"name":"Norwegian", "nativeName":"Norsk"},
          "ii":{"name":"Nuosu", "nativeName":"????????? Nuosuhxop"},
          "nr":{"name":"South Ndebele", "nativeName":"isiNdebele"},
          "oc":{"name":"Occitan", "nativeName":"Occitan"},
          "oj":{"name":"Ojibwe, Ojibwa", "nativeName":"????????????????????????"},
          "cu":{"name":"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic", "nativeName":"?????????? ????????????????????"},
          "om":{"name":"Oromo", "nativeName":"Afaan Oromoo"},
          "or":{"name":"Oriya", "nativeName":"???????????????"},
          "os":{"name":"Ossetian, Ossetic", "nativeName":"???????? ??????????"},
          "pa":{"name":"Panjabi, Punjabi", "nativeName":"??????????????????, ???????????????"},
          "pi":{"name":"P??li", "nativeName":"????????????"},
          "fa":{"name":"Persian", "nativeName":"??????????"},
          "pl":{"name":"Polish", "nativeName":"polski"},
          "ps":{"name":"Pashto, Pushto", "nativeName":"????????"},
          "pt":{"name":"Portuguese", "nativeName":"Portugu??s"},
          "qu":{"name":"Quechua", "nativeName":"Runa Simi, Kichwa"},
          "rm":{"name":"Romansh", "nativeName":"rumantsch grischun"},
          "rn":{"name":"Kirundi", "nativeName":"kiRundi"},
          "ro":{"name":"Romanian, Moldavian, Moldovan", "nativeName":"rom??n??"},
          "ru":{"name":"Russian", "nativeName":"?????????????? ????????"},
          "sa":{"name":"Sanskrit (Sa???sk???ta)", "nativeName":"???????????????????????????"},
          "sc":{"name":"Sardinian", "nativeName":"sardu"},
          "sd":{"name":"Sindhi", "nativeName":"??????????????????, ?????????? ?????????????"},
          "se":{"name":"Northern Sami", "nativeName":"Davvis??megiella"},
          "sm":{"name":"Samoan", "nativeName":"gagana faa Samoa"},
          "sg":{"name":"Sango", "nativeName":"y??ng?? t?? s??ng??"},
          "sr":{"name":"Serbian", "nativeName":"???????????? ??????????"},
          "gd":{"name":"Scottish Gaelic; Gaelic", "nativeName":"G??idhlig"},
          "sn":{"name":"Shona", "nativeName":"chiShona"},
          "si":{"name":"Sinhala, Sinhalese", "nativeName":"???????????????"},
          "sk":{"name":"Slovak", "nativeName":"sloven??ina"},
          "sl":{"name":"Slovene", "nativeName":"sloven????ina"},
          "so":{"name":"Somali", "nativeName":"Soomaaliga, af Soomaali"},
          "st":{"name":"Southern Sotho", "nativeName":"Sesotho"},
          "es":{"name":"Spanish; Castilian", "nativeName":"espa??ol, castellano"},
          "su":{"name":"Sundanese", "nativeName":"Basa Sunda"},
          "sw":{"name":"Swahili", "nativeName":"Kiswahili"},
          "ss":{"name":"Swati", "nativeName":"SiSwati"},
          "sv":{"name":"Swedish", "nativeName":"svenska"},
          "ta":{"name":"Tamil", "nativeName":"???????????????"},
          "te":{"name":"Telugu", "nativeName":"??????????????????"},
          "tg":{"name":"Tajik", "nativeName":"????????????, to??ik??, ???????????????"},
          "th":{"name":"Thai", "nativeName":"?????????"},
          "ti":{"name":"Tigrinya", "nativeName":"????????????"},
          "bo":{"name":"Tibetan Standard, Tibetan, Central", "nativeName":"?????????????????????"},
          "tk":{"name":"Turkmen", "nativeName":"T??rkmen, ??????????????"},
          "tl":{"name":"Tagalog", "nativeName":"Wikang Tagalog, ??????????????? ??????????????????"},
          "tn":{"name":"Tswana", "nativeName":"Setswana"},
          "to":{"name":"Tonga (Tonga Islands)", "nativeName":"faka Tonga"},
          "tr":{"name":"Turkish", "nativeName":"T??rk??e"},
          "ts":{"name":"Tsonga", "nativeName":"Xitsonga"},
          "tt":{"name":"Tatar", "nativeName":"??????????????, tatar??a, ?????????????????"},
          "tw":{"name":"Twi", "nativeName":"Twi"},
          "ty":{"name":"Tahitian", "nativeName":"Reo Tahiti"},
          "ug":{"name":"Uighur, Uyghur", "nativeName":"Uy??urq??, ???????????????????"},
          "uk":{"name":"Ukrainian", "nativeName":"????????????????????"},
          "ur":{"name":"Urdu", "nativeName":"????????"},
          "uz":{"name":"Uzbek", "nativeName":"zbek, ??????????, ???????????????"},
          "ve":{"name":"Venda", "nativeName":"Tshiven???a"},
          "vi":{"name":"Vietnamese", "nativeName":"Ti???ng Vi???t"},
          "vo":{"name":"Volap??k", "nativeName":"Volap??k"},
          "wa":{"name":"Walloon", "nativeName":"Walon"},
          "cy":{"name":"Welsh", "nativeName":"Cymraeg"},
          "wo":{"name":"Wolof", "nativeName":"Wollof"},
          "fy":{"name":"Western Frisian", "nativeName":"Frysk"},
          "xh":{"name":"Xhosa", "nativeName":"isiXhosa"},
          "yi":{"name":"Yiddish", "nativeName":"????????????"},
          "yo":{"name":"Yoruba", "nativeName":"Yor??b??"},
          "za":{"name":"Zhuang, Chuang", "nativeName":"Sa?? cue????, Saw cuengh"}
        }
      };
      return database;
    }
    permit( e ) {
      // 'label', , 'speak'
      var permit = [ 'budget', 'delivery', 'lives' ];
      return permit.includes( e );
    }
    notice( e ) {}
    flags( e = false ) {
      const thisClass = this;
      var flags = thisClass.database.flags, rtn = false;
      if( e ) {
        thisClass.database.lives.forEach( function( l, i ) {
          if( l[ 1 ].toLowerCase() == e.toLowerCase() ) {rtn = l[ 0 ].toLowerCase();}
        } );
        if( ! rtn ) {
          flags.forEach( function( l, i ) {
            if( l[ 1 ].toLowerCase() == e.toLowerCase() ) {rtn = l[ 0 ].toLowerCase();}
          } );
        }
        // 16x12, 20x15, 24x18, 28x21, 32x24, 36x27, 40x30, 48x36, 56x42, 60x45, 64x48, 72x54, 80x60, 84x63, 96x72, 108x81, 112x84, 120x90, 128x96, 144x108, 160x120, 192x144, 224x168, 256x192
        if( thisClass.isCDN ) {
          return ( rtn ) ? rtn : 'xx';
        } else {
          return ( rtn ) ? 'https://flagcdn.com/20x15/' + rtn + '.png' : 'https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/flags/4x3/xx.svg';
        }
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
      
      // console.log( 'Filter', {filters: args, list: thisClass.base} );console.log( 'Filtered', vase );

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
    fetchJSON( args, e ) {
      const thisClass = this;
        e.classList.add( 'fwp-loading' );
        fetch(
        'https://www.fiverr.com/users/' + thisClass.me + '/requests?current_filter=' + args.filter + '&page=' + args.page + '&per_page=' + args.per_page,
        {
        "credentials": "include",
        "headers": {
          "Accept": "text/javascript",
          "Accept-Language": "en-US,en;q=0.5",
        },
        "referrer": 'https://www.fiverr.com/users/' + thisClass.me + '/requests',
        "method": "GET",
        "mode": "cors"
        } ).then( response => response.json() ).then( data => {
          if( data.results && data.results.rows && data.results.rows.length >= 1 && data.results.rows[ 0 ].cells && data.results.rows[ 0 ].cells[ 0 ].type && data.results.rows[ 0 ].cells[ 0 ].type == 'empty' ) {
          } else {
            thisClass.fetchExe( data );
            args.page = ( args.page + 1 );
            e.setAttribute( 'data-meta', JSON.stringify( args ) );
          }
          e.classList.remove( 'fwp-loading' );
        } ).catch( ( err )=>{thisClass.notice( err );e.classList.remove( 'fwp-loading' );} );
    }
    fetchExe( args ) {
      const thisClass = this;
      var tbody = document.querySelector( '.js-db-table.fwp-js-activate table tbody' ), html = '', tr, td, span, div, a, itag, node, row;
      if( args.results && args.results.rows && args.results.rows.length >= 1 ) {
        if( args.results.rows[ 0 ].cells && args.results.rows[ 0 ].cells[ 0 ].type && args.results.rows[ 0 ].cells[ 0 ].type == 'empty' ) {
          return;
        } else {
          args.results.rows.forEach( function( e, i ) {
              row = e;
              // Create TR Table Row
              tr = document.createElement( 'tr' );tr.setAttribute( 'data-id', row.identifier );
              // Table Data Date <td>
              td = document.createElement( 'td' );
              td.classList.add( row.cells[0].type );
              span = document.createElement( 'span' );span.innerHTML = row.cells[0].text;td.appendChild( span );
              tr.appendChild( td );

              // Table Data BUYER <td>
              td = document.createElement( 'td' );
              td.classList.add( row.cells[1].type, row.cells[1].cssClass );
              span = document.createElement( 'span' );span.classList.add( 'user-pict-40' );span.innerHTML = row.cells[1].userPict;td.appendChild( span );
              tr.appendChild( td );

              // Table Data REQUEST <td>
              td = document.createElement( 'td' );td.classList.add( row.cells[2].type );
              div = document.createElement( 'div' );div.classList.add( 'ellipsis', 'text-wrap' );
              span = document.createElement( 'span' );span.innerText = ( row.cells[2].text >= 125 ) ? row.cells[2].text.substr( 0, 125 ) + '...' : row.cells[2].text;
              if( row.cells[2].text >= 125 ) {a = document.createElement( 'a' );a.href= '#';a.classList.add( 'is-online', 'btn-see-more', 'js-see-more', 'm-r-10', 'pos-abs' );a.setAttribute( 'data-more', row.cells[2].text );a.innerText = 'See more';a.onclick = function( e ) {e.preventDefault();this.parentNode.innerHTML = this.dataset.more;};itag = document.createElement( 'i' );a.appendChild( itag );span.appendChild( a );}div.appendChild( span );td.appendChild( div );
              if( row.cells[2].tags && row.cells[2].tags.length >= 1 ) {
                div = document.createElement( 'div' );div.classList.add( 'tags-standard', 'tags-white-bg' );
                row.cells[2].tags.forEach( function( tg, t ) {
                  span = document.createElement( 'span' );span.innerText = tg;div.appendChild( span );
                } );
                td.appendChild( div );
              }
              tr.appendChild( td );
              
              // Table Data OFFERS <td>
              td = document.createElement( 'td' );
              td.classList.add( row.cells[3].type, 't-a-center' );
              span = document.createElement( 'span' );span.innerText = row.cells[3].text;td.appendChild( span );
              tr.appendChild( td );
      
              // Table Data DURATION <td>
              td = document.createElement( 'td' );
              td.classList.add( row.cells[4].type, 't-a-center', 'with-text' );
              div = document.createElement( 'div' );div.classList.add( 'hover-show' );
              span = document.createElement( row.cells[4].buttons[0].type );span.classList.add( row.cells[4].buttons[0].class );span.innerText = row.cells[4].buttons[0].text;div.appendChild( span );
              a = document.createElement( 'a' );a.href = '#';a.setAttribute( 'data-meta', JSON.stringify( row.cells[4].buttons[1].meta ) );a.classList.add( ...row.cells[4].buttons[1].class.split( ' ' ) );a.innerText = row.cells[4].buttons[1].text;div.appendChild( a );
              td.appendChild( div );
              div = document.createElement( 'div' );div.classList.add( 'hover-hide' );
              span = document.createElement( 'span' );span.innerText = row.cells[4].text;div.appendChild( span );
              td.appendChild( div );tr.appendChild( td );
      
              // Table Data BUDGET <td>
              td = document.createElement( 'td' );
              td.classList.add( row.cells[5].type, ( ( row.cells[5].withText ) ? 't-a-center' : 'no-t-a-center' ), ( ( row.cells[5].withText ) ? 'with-text' : 'no-width-text' ) );
              div = document.createElement( 'div' );div.classList.add( 'hover-show' );
              span = document.createElement( row.cells[5].buttons[0].type );span.classList.add( ...row.cells[5].buttons[0].class.split( ' ' ) );span.innerText = row.cells[5].buttons[0].text;div.appendChild( span );
              a = document.createElement( 'a' );a.href = '#';a.setAttribute( 'data-meta', JSON.stringify( row.cells[5].buttons[1].meta ) );a.classList.add( ...row.cells[5].buttons[1].class.split( ' ' ) );a.innerText = row.cells[5].buttons[1].text;div.appendChild( a );
              td.appendChild( div );
              div = document.createElement( 'div' );div.classList.add( 'hover-hide' );
              span = document.createElement( 'span' );span.innerText = row.cells[5].text;div.appendChild( span );
              td.appendChild( div );tr.appendChild( td );

              tbody.appendChild( tr );
          } );
        }
      }
    }
    loadMore( args = {} ) {
      const thisClass = this;var col, tr, a, tfoot, hasTfoot = false;
      args = {
        page: 1,
        per_page: 15,
        filter: 'active'
      };
      if( document.querySelectorAll( '.js-db-table.fwp-js-activate table tfoot' ).length >= 1 ) {
        tfoot = document.querySelector( '.js-db-table.fwp-js-activate table tfoot' );hasTfoot = true;
      } else {
        tfoot = document.createElement( 'tfoot' );tfoot.classList.add( 'fwp-tfoot' );
      }
      
      col = document.querySelectorAll( '.js-db-table table thead tr.js-header-titles td' ).length;
      tr = document.createElement( 'tr' );td = document.createElement( 'td' );td.classList.add( 'fwp-tr-load-more' );td.setAttribute( 'colspan', ( col && col > 1 ) ? col : 6 );
      a = document.createElement( 'a' );a.classList.add( 'fwp-load-more' );a.href = '/users/' + thisClass.me + '/requests/offers?current_filter=' + args.filter + '&amp;page=' + args.page + '&amp;per_page=' + args.per_page;a.innerText = 'Load More';a.setAttribute( 'data-meta', JSON.stringify( args ) );a.appendChild( document.createElement( 'i' ) );
      td.appendChild( a );tr.appendChild( td );
      
      tfoot.innerHTML = '';tfoot.appendChild( tr );
      if( ! hasTfoot ) {
        document.querySelector( '.js-db-table.fwp-js-activate table' ).appendChild( tfoot );
      }

      document.querySelector( '.js-db-table.fwp-js-activate table tfoot .fwp-load-more' ).addEventListener( 'click', function( e ) {
        e.preventDefault();
        var args = JSON.parse( this.dataset.meta );
        thisClass.fetchJSON( args, this );
      } );
    }
    loadAll() {
      const thisClass = this;
      document.querySelector( '.db-new-main-table table thead td .js-fwp-load-all-btn' ).addEventListener( 'click', function( e ) {
        e.preventDefault();
        var tab = '.db-new-filters .tabs.js-db-status-tabs li a[data-type="all"]', index = 0;
        if( document.querySelectorAll( tab ).length >= 1 ) {
          var tb = document.querySelector( tab ),
              dc = thisClass.is( tb.dataset.countExtended ) ? tb.dataset.countExtended : false,
              dce = thisClass.is( tb.dataset.count ) ? tb.dataset.count : false,
              args = thisClass.is( this.dataset.meta ) ? JSON.parse( this.dataset.meta ) : {
                page: 1,
                per_page: ( dce >= 1 ) ? dce : 200,
                filter: 'active'
              };
              setInterval(() => {
                index++;       
                args.page = index;
                if( index <= 20 ) {
                  thisClass.fetchJSON( args, this );
                }
              }, 5000 );
        }
      } );
    }
	}
  // Execute functions
  new buyerRequestDetails();
} )( jQuery );