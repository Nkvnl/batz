var mongoose = require("mongoose");
var Gallerij = require("../models/gallerij");
// mongoose.connect('mongodb://niek:batz11@ds235053.mlab.com:35053/batz')
mongoose.connect('mongodb://niek1:batz11@ds235053.mlab.com:35053/batz');

var fotos = [
    new Gallerij({
        img: "https://i.imgur.com/M1HDc1m.jpg",
        thumbnail: "https://i.imgur.com/AG0hXKl.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/yOalNQ5.jpg",
        thumbnail: "https://i.imgur.com/eujrznQ.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/yLRgp3c.jpg",
        thumbnail: "https://i.imgur.com/YH6pKed.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/IZoAytN.jpg",
        thumbnail: "https://i.imgur.com/G12RrM9.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/KD91FfB.jpg",
        thumbnail: "https://i.imgur.com/FKjouXR.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/5jFxsP8.jpg",
        thumbnail: "https://i.imgur.com/dSWdTpo.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/KD91FfB.jpg",
        thumbnail: "https://i.imgur.com/FKjouXR.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/REEWbnF.jpg",
        thumbnail: "https://i.imgur.com/0Mz5VZa.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/litGrCh.jpg",
        thumbnail: "https://i.imgur.com/Met4nLQ.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/NuqCUWr.jpg",
        thumbnail: "https://i.imgur.com/n3wWaGz.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/Ut4HUvO.jpg",
        thumbnail: "https://i.imgur.com/8rn8dMT.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/5wmUw7u.jpg",
        thumbnail: "https://i.imgur.com/eL7uLQe.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/nWAYoF6.jpg",
        thumbnail: "https://i.imgur.com/NpdQrUj.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/rIXjiVR.jpg",
        thumbnail: "https://i.imgur.com/JEN0Vgr.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/uO3qKuP.jpg",
        thumbnail: "https://i.imgur.com/y8gRUIg.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/T6dZJxb.jpg",
        thumbnail: "https://i.imgur.com/ZKOKjDN.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/FRYLS97.jpg",
        thumbnail: "https://i.imgur.com/Vf91M0w.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/ui7AdT6.jpg",
        thumbnail: "https://i.imgur.com/vJUphKq.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/u7hdSwS.jpg",
        thumbnail: "blob:https://imgur.com/1b9ced2e-fdd5-4f05-9807-e987cccb8d8c"
    }),
    new Gallerij({
        img: "https://i.imgur.com/Wd0AFb5.jpg",
        thumbnail: "https://i.imgur.com/SXvUjim.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/CkU3S8j.jpg",
        thumbnail: "https://i.imgur.com/aH83VDs.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/f0C6b7b.jpg",
        thumbnail: "https://i.imgur.com/LmFXBgP.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/gaUnr8o.jpg",
        thumbnail: "https://i.imgur.com/7aX86iX.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/Gq7CMrm.jpg",
        thumbnail: "https://i.imgur.com/yhOYw7b.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/sgbjSFE.jpg",
        thumbnail: "https://i.imgur.com/4zza7k2.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/TO9T0bd.jpg",
        thumbnail: "https://i.imgur.com/6uJlXY2.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/5mVHc7Z.jpg",
        thumbnail: "https://i.imgur.com/LFvFaDm.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/BgKIub2.jpg",
        thumbnail: "https://i.imgur.com/hlkfLQv.jpg" //kist
    }),
    new Gallerij({
        img: "https://i.imgur.com/ztQ8H0j.jpg",
        thumbnail: "https://i.imgur.com/TWwau3h.jpg" //clown
    }),
    new Gallerij({
        img: "https://i.imgur.com/F9LBJVW.jpg",
        thumbnail: "https://i.imgur.com/NwcHUDe.jpg" //clown2
    }),
    new Gallerij({
        img: "https://i.imgur.com/ETrGxC5.jpg",
        thumbnail: "https://i.imgur.com/MgIGv7Q.jpg" //rotsman
    }),
    new Gallerij({
        img: "https://i.imgur.com/DFeyPRn.jpg",
        thumbnail: "https://i.imgur.com/n4Ls5xI.jpg" //geestenvrouw
    }),
    new Gallerij({
        img: "https://i.imgur.com/lkXUBvH.jpg",
        thumbnail: "https://i.imgur.com/Pe3vId0.jpg" //blond vrouw 1
    }),
    new Gallerij({
        img: "https://i.imgur.com/PRRXnoJ.jpg",
        thumbnail: "https://i.imgur.com/64SvVYO.jpg" //blond vrouw 2
    }),
    new Gallerij({
        img: "https://i.imgur.com/TMewisD.jpg",
        thumbnail: "https://i.imgur.com/btym8vz.jpg" //geestenvrouw 2
    }),
    new Gallerij({
        img: "https://i.imgur.com/h57iDsI.jpg",
        thumbnail: "https://i.imgur.com/wpdT99O.jpg" //ruben
    }),
    new Gallerij({
        img: "https://i.imgur.com/MKiHwUE.jpg",
        thumbnail: "https://i.imgur.com/SYVtJZX.jpg" //1/4
    }),
    new Gallerij({
        img: "https://i.imgur.com/dFnL6lU.jpg",
        thumbnail: "https://i.imgur.com/J2ZkMcQ.jpg" //mummie
    }),
    new Gallerij({
        img: "https://i.imgur.com/Qyzfnxf.jpg",
        thumbnail: "https://i.imgur.com/ARDbwkN.jpg" //non zoom
    }),
    new Gallerij({
        img: "https://i.imgur.com/YhhMXzc.jpg",
        thumbnail: "https://i.imgur.com/urlu0qj.jpg" //non
    }),
    new Gallerij({
        img: "https://i.imgur.com/4sFDrYS.jpg",
        thumbnail: "https://i.imgur.com/XhDOtVW.jpg" //1/2
    }),
    new Gallerij({
        img: "https://i.imgur.com/B6ZvCpC.jpg",
        thumbnail: "https://i.imgur.com/kBDfc0S.jpg" //1/2 man
    }),
    new Gallerij({
        img: "https://i.imgur.com/G157en8.jpg",
        thumbnail: "https://i.imgur.com/946t4E5.jpg" //BLOED
    }),
    new Gallerij({
        img: "https://i.imgur.com/y93m1XX.jpg",
        thumbnail: "https://i.imgur.com/suTJ6Jg.jpg" //POLITIE
    }),
    new Gallerij({
        img: "https://i.imgur.com/lOHLs0t.jpg",
        thumbnail: "https://i.imgur.com/EsUTwTa.jpg" //2VROUWEN
    }),
    new Gallerij({
        img: "https://i.imgur.com/kdc4oVi.jpg",
        thumbnail: "https://i.imgur.com/CULrkJC.jpg" //GAT
    }),
    new Gallerij({
        img: "https://i.imgur.com/dJrE8eK.jpg",
        thumbnail: "https://i.imgur.com/qaSd72U.jpg" //TRALIES
    }),
    new Gallerij({
        img: "https://i.imgur.com/5eDcU7h.jpg",
        thumbnail: "https://i.imgur.com/gGV7eo0.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/cm0pWIx.jpg",
        thumbnail: "https://i.imgur.com/iFmuv53.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/pTaO4nR.jpg",
        thumbnail: "https://i.imgur.com/s7ebNDz.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/U5Zpfpx.jpg",
        thumbnail: "https://i.imgur.com/Lhitwj1.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/OvTGdfc.jpg",
        thumbnail: "https://i.imgur.com/0xeV1oF.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/j0Tfu8G.jpg",
        thumbnail: "https://i.imgur.com/DG28rIp.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/ku8pOqx.jpg",
        thumbnail: "https://i.imgur.com/JCgxfP0.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/kTXpLF6.jpg",
        thumbnail: "https://i.imgur.com/fAKIL2U.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/6aBjzHb.jpg",
        thumbnail: "https://i.imgur.com/kLlX1eV.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/ME5Yty7.jpg",
        thumbnail: "https://i.imgur.com/0VJ8ywe.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/QDfwSQe.jpg",
        thumbnail: "https://i.imgur.com/oMtfEsQ.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/I9gVf2z.jpg",
        thumbnail: "https://i.imgur.com/rWUC2hI.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/q0AGEFq.jpg",
        thumbnail: "https://i.imgur.com/CCWmj1C.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/rth1a2f.jpg",
        thumbnail: "https://i.imgur.com/I2leUOS.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/tTYDkq7.jpg",
        thumbnail: "https://i.imgur.com/Q7VYFOg.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/S4hBFtS.jpg",
        thumbnail: "https://i.imgur.com/TLXvwqn.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/raDo7HK.jpg",
        thumbnail: "https://i.imgur.com/PXUyww4.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/4ktuZNn.jpg",
        thumbnail: "https://i.imgur.com/EHq1pWv.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/QyGzmSx.jpg",
        thumbnail: "https://i.imgur.com/TxsEnpS.jpg" //G
    }),
    new Gallerij({
        img: "https://i.imgur.com/tvwsHRF.jpg",
        thumbnail: "https://i.imgur.com/DeaWm7W.jpg" //DRACULA
    }),
    new Gallerij({
        img: "https://i.imgur.com/T6PqOhI.jpg",
        thumbnail: "https://i.imgur.com/KirAj4i.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/LBUa8JQ.jpg",
        thumbnail: "https://i.imgur.com/OLz1y35.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/8tknWgd.jpg",
        thumbnail: "https://i.imgur.com/xv0wGwF.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/0FTVfXL.jpg",
        thumbnail: "https://i.imgur.com/Qw8hJVe.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/r2KsDeD.jpg",
        thumbnail: "https://i.imgur.com/RptQNqM.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/Y0F4owY.jpg",
        thumbnail: "https://i.imgur.com/YMvdltK.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/Mo7LwJs.jpg",
        thumbnail: "https://i.imgur.com/BhbHhjW.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/NTvKt6K.jpg",
        thumbnail: "https://i.imgur.com/ke1fbv1.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/wSaM212.jpg",
        thumbnail: "https://i.imgur.com/5XJ9gM9.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/zzQexuL.jpg",
        thumbnail: "https://i.imgur.com/2bX5mHJ.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/Tq3p1p1.jpg",
        thumbnail: "https://i.imgur.com/j2RaJQm.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/kL3Jimj.jpg",
        thumbnail: "https://i.imgur.com/Zx8TRDA.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/42bTgmp.jpg",
        thumbnail: "https://i.imgur.com/s5D4PM1.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/yQnLDj7.jpg",
        thumbnail: "https://i.imgur.com/F72ZgOE.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/wMc9Jg0.jpg",
        thumbnail: "https://i.imgur.com/O8rnwxL.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/gmSHsv9.jpg",
        thumbnail: "https://i.imgur.com/vPt5P9Z.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/YU02qVa.jpg",
        thumbnail: "https://i.imgur.com/ITnK7tN.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/a5Mu6N3.jpg",
        thumbnail: "https://i.imgur.com/b4ybEX1.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/YIJ7a3p.jpg",
        thumbnail: "https://i.imgur.com/q1twkHd.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/tV7OUt8.jpg",
        thumbnail: "https://i.imgur.com/vwMCDrf.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/CbErA7Y.jpg",
        thumbnail: "https://i.imgur.com/Vqvn4DH.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/RThU2iZ.jpg",
        thumbnail: "https://i.imgur.com/ruSIzBu.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/LUw6Xtz.jpg",
        thumbnail: "https://i.imgur.com/Xvbzcgr.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/Sg11meJ.jpg",
        thumbnail: "https://i.imgur.com/Zg5JpEB.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/QraCsti.jpg",
        thumbnail: "https://i.imgur.com/0y3GBLB.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/rTqOrgV.jpg",
        thumbnail: "https://i.imgur.com/h1V9R0E.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/ixzI5Iw.jpg#",
        thumbnail: "https://i.imgur.com/GiYhNAJ.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/uL0QO12.jpg",
        thumbnail: "https://i.imgur.com/oHwbSHh.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/NG4qtRn.jpg",
        thumbnail: "https://i.imgur.com/Ini0UZV.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/Yqeh9Lh.jpg",
        thumbnail: "https://i.imgur.com/nnvtIB5.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/0SJ9Fsa.jpg",
        thumbnail: "https://i.imgur.com/jEN26hK.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/Sg11meJ.jpg",
        thumbnail: "https://i.imgur.com/eTjIEpL.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/2cjXwvd.jpg",
        thumbnail: "https://i.imgur.com/ovL8jiA.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/0HC8HPy.jpg",
        thumbnail: "https://i.imgur.com/0qH4Rw5.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/0HC8HPy.jpg",
        thumbnail: "https://i.imgur.com/0qH4Rw5.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/rWV2uCY.jpg",
        thumbnail: "https://i.imgur.com/DAEcOIf.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/ZDvgnMU.jpg",
        thumbnail: "https://i.imgur.com/bVlRW7C.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/ixzI5Iw.jpg",
        thumbnail: "https://i.imgur.com/ixzI5Iw.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/bxP0fwE.jpg",
        thumbnail: "https://i.imgur.com/Lsh5zth.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/UyCRBhE.jpg",
        thumbnail: "https://i.imgur.com/HvXZoCD.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/SbSB8ji.jpg",
        thumbnail: "https://i.imgur.com/4TBKzB5.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/6AVjFMn.jpg",
        thumbnail: "https://i.imgur.com/e0GV3AD.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/GSNm0nh.jpg",
        thumbnail: "https://i.imgur.com/xxuCvVa.jpg"
    }),
    new Gallerij({
        img: "https: //i.imgur.com/jFXUboQ.jpg",
        thumbnail: "https://i.imgur.com/YJfq7Ps.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/4FCYUdX.jpg",
        thumbnail: "https://i.imgur.com/zjqthbh.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/WhBjqfp.jpg",
        thumbnail: "https://i.imgur.com/iJpwnoa.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/M4gXCCN.jpg",
        thumbnail: "https://i.imgur.com/4CAk5Ci.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/38KKe3w.jpg",
        thumbnail: "https://i.imgur.com/c8QUq14.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/cGuOGjw.jpg",
        thumbnail: "https://i.imgur.com/d2TuA8u.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/ZRkEEed.jpg",
        thumbnail: "https://i.imgur.com/gXsHRsy.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/kp6nXnE.jpg",
        thumbnail: "https://i.imgur.com/qoKwt0W.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/W3JzTDd.jpg",
        thumbnail: "https://i.imgur.com/CHr5nxb.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/mEoU25d.jpg",
        thumbnail: "https://i.imgur.com/HiRh88A.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/aw4afoS.jpg",
        thumbnail: "https://i.imgur.com/1ppUjbQ.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/JGu9KCF.jpg",
        thumbnail: "https://i.imgur.com/tn24Osp.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/TUTsle7.jpg",
        thumbnail: "https://i.imgur.com/YDPeHN0.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/JC4DHuw.jpg",
        thumbnail: "https://i.imgur.com/zp8RISH.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/plaCHGt.jpg",
        thumbnail: "https://i.imgur.com/oFXMVt6.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/anflHMg.jpg",
        thumbnail: "https://i.imgur.com/Sv6CuLZ.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/33bUCoI.jpg",
        thumbnail: "https://i.imgur.com/PgPl37X.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/weo5MJ8.jpg",
        thumbnail: "https://i.imgur.com/pjn92p8.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/Jt2cL1H.jpg",
        thumbnail: "https://i.imgur.com/VDAMR7j.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/WpvONys.jpg",
        thumbnail: "https://i.imgur.com/FlkosXT.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/N6SIyKh.jpg",
        thumbnail: "https://i.imgur.com/81Hl3Zn.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/u2KF2T2.jpg",
        thumbnail: "https://i.imgur.com/yIBIflg.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/obwyXdz.jpg",
        thumbnail: "https://i.imgur.com/2vgTKA9.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/4m2f3uc.jpg",
        thumbnail: "https://i.imgur.com/UXFYWoh.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/4m2f3uc.jpg",
        thumbnail: "https://i.imgur.com/z6wuKH7.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/LTKbj53.jpg",
        thumbnail: "https://i.imgur.com/z6wuKH7.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/QkBoioN.jpg",
        thumbnail: "https://i.imgur.com/ft58L0L.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/hGzoUFl.jpg",
        thumbnail: "https://i.imgur.com/DU6GC2K.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/JWWkBh5.jpg",
        thumbnail: "https://i.imgur.com/VmJeXKx.jpg"
    }),
    new Gallerij({
        img: "https://i.imgur.com/bG5qOCS.jpg",
        thumbnail: "https://i.imgur.com/CXtikO0.jpg"
    }),
];

var done = 0;
for (var i = 0; i < fotos.length; i++) {
    console.log(fotos[i]);
    fotos[i].save(function(err, result) {
        if (err) {
            console.log(err)
        }
        else {
            done++;
            if (done === fotos.length) {
                exit();
            }
        }
    });
}

function exit() {
    mongoose.disconnect();
}
