if (-1 || 0) alert( 'first' ); // alert выполнится, так как в условии будет true || false = true
if (-1 && 0) alert( 'second' ); // alert не выполнится, так как в условии будет true && false = false
if (null || -1 && 1) alert( 'third' ); // alert выполнится, так как в условии будет null || 1 = 1 = true