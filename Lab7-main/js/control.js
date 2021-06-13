var portfolioApp = angular.module('portfolioApp',[]);

portfolioApp.controller('GalleryListCtrl', function($scope)
{
    $scope.galleries = 
    [
        { 'title':'Windows95',
        'when':'24-08-1995',
        'thumbnailUrl':'95.jpg'
        },
        { 'title':'Windows98',
        'when':'25-06-1998',
        'thumbnailUrl':'98.jpg'
        },
        { 'title':'WindowsXP',
        'when':'24-08-2001',
        'thumbnailUrl':'xp.jpg'
        },
        { 'title':'WindowsVista',
        'when':'21-10-2006',
        'thumbnailUrl':'wv.jpg'
        },
        { 'title':'Windows7',
        'when':'22-07-2009',
        'thumbnailUrl':'w7.jpg'
        },
        { 'title':'Windows8',
        'when':'26-08-2012',
        'thumbnailUrl':'w8.jpg'
        },
        { 'title':'Windows8.1',
        'when':'17-10-2013',
        'thumbnailUrl':'wwe.jpg'
        },
        { 'title':'Windows10',
        'when':'29-07-2015',
        'thumbnailUrl':'w10.jpg'
        },
        { 'title':'WindowsPRO',
        'when':'29-07-2025',
        'thumbnailUrl':'wpro.jpg'
        }
    ];
    $scope.galleries.length;
});