(()=>{var cm=Object.defineProperty;var ss=(n,t)=>{for(var e in t)cm(n,e,{get:t[e],enumerable:!0})};var yf=0,Uc=1,vf=2;var qr=1,Mf=2,js=3,Zi=0,Mn=1,zn=2,fi=0,Qs=1,Fc=2,Oc=3,Bc=4,Sf=5;var ds=100,bf=101,wf=102,Ef=103,Af=104,Tf=200,Rf=201,Cf=202,If=203,zc=204,kc=205,Pf=206,Lf=207,Df=208,Nf=209,Uf=210,Ff=211,Of=212,Bf=213,zf=214,sa=0,ra=1,oa=2,qs=3,aa=4,la=5,ca=6,ha=7,Vc=0,kf=1,Vf=2,Zn=0,Gc=1,Hc=2,Wc=3,Xc=4,qc=5,Yc=6,$c=7;var Zc=300,Ji=301,ps=302,ka=303,Va=304,Yr=306,ua=1e3,oi=1001,fa=1002,an=1003,Gf=1004;var $r=1005;var je=1006,Ga=1007;var Ki=1008;var Nn=1009,Jc=1010,Kc=1011,tr=1012,Ha=1013,Jn=1014,Kn=1015,jn=1016,Wa=1017,Xa=1018,er=1020,jc=35902,Qc=35899,th=1021,eh=1022,kn=1023,ai=1026,ji=1027,nh=1028,qa=1029,Qi=1030,Ya=1031;var $a=1033,Zr=33776,Jr=33777,Kr=33778,jr=33779,Za=35840,Ja=35841,Ka=35842,ja=35843,Qa=36196,tl=37492,el=37496,nl=37488,il=37489,Qr=37490,sl=37491,rl=37808,ol=37809,al=37810,ll=37811,cl=37812,hl=37813,ul=37814,fl=37815,dl=37816,pl=37817,ml=37818,gl=37819,xl=37820,_l=37821,yl=36492,vl=36494,Ml=36495,Sl=36283,bl=36284,to=36285,wl=36286;var Er=2300,da=2301,ea=2302,Rc=2303,Cc=2400,Ic=2401,Pc=2402;var Hf=3200;var ih=0,Wf=1,wi="",on="srgb",Ar="srgb-linear",Tr="linear",Ce="srgb";var na=7680;var Xf=519,qf=512,Yf=513,$f=514,El=515,Zf=516,Jf=517,Al=518,Kf=519,sh=35044;var rh="300 es",$n=2e3,Rr=2001;function hm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function um(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Cr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jf(){let n=Cr("canvas");return n.style.display="block",n}var Xu={},Ys=null;function Ir(...n){let t="THREE."+n.shift();Ys?Ys("log",t,...n):console.log(t,...n)}function Qf(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function te(...n){n=Qf(n);let t="THREE."+n.shift();if(Ys)Ys("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ne(...n){n=Qf(n);let t="THREE."+n.shift();if(Ys)Ys("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function cs(...n){let t=n.join(" ");t in Xu||(Xu[t]=!0,te(...n))}function td(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var ed={[sa]:ra,[oa]:ca,[aa]:ha,[qs]:la,[ra]:sa,[ca]:oa,[ha]:aa,[la]:qs},li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ia=Math.PI/180,pa=180/Math.PI;function ki(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function ve(n,t,e){return Math.max(t,Math.min(e,n))}function fm(n,t){return(n%t+t)%t}function sc(n,t,e){return(1-e)*n+e*t}function si(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ue(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var hh=class hh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ve(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hh.prototype.isVector2=!0;var fe=hh,ci=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,l){let a=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],m=r[o+1],_=r[o+2],v=r[o+3];if(h!==v||a!==f||c!==m||u!==_){let p=a*f+c*m+u*_+h*v;p<0&&(f=-f,m=-m,_=-_,v=-v,p=-p);let x=1-l;if(p<.9995){let T=Math.acos(p),L=Math.sin(T);x=Math.sin(x*T)/L,l=Math.sin(l*T)/L,a=a*x+f*l,c=c*x+m*l,u=u*x+_*l,h=h*x+v*l}else{a=a*x+f*l,c=c*x+m*l,u=u*x+_*l,h=h*x+v*l;let T=1/Math.sqrt(a*a+c*c+u*u+h*h);a*=T,c*=T,u*=T,h*=T}}t[e]=a,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){let l=i[s],a=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return t[e]=l*_+u*h+a*m-c*f,t[e+1]=a*_+u*f+c*h-l*m,t[e+2]=c*_+u*m+l*f-a*h,t[e+3]=u*_-l*h-a*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,l=Math.cos,a=Math.sin,c=l(i/2),u=l(s/2),h=l(r/2),f=a(i/2),m=a(s/2),_=a(r/2);switch(o){case"XYZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"YZX":this._x=f*u*h+c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h-f*m*_;break;case"XZY":this._x=f*u*h-c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h+f*m*_;break;default:te("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],l=e[5],a=e[9],c=e[2],u=e[6],h=e[10],f=i+l+h;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-a)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>l&&i>h){let m=2*Math.sqrt(1+i-l-h);this._w=(u-a)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(l>h){let m=2*Math.sqrt(1+l-i-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(a+u)/m}else{let m=2*Math.sqrt(1+h-i-l);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(a+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,l=e._x,a=e._y,c=e._z,u=e._w;return this._x=i*u+o*l+s*c-r*a,this._y=s*u+o*a+r*l-i*c,this._z=r*u+o*c+i*a-s*l,this._w=o*u-i*l-s*a-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,l=this.dot(t);l<0&&(i=-i,s=-s,r=-r,o=-o,l=-l);let a=1-e;if(l<.9995){let c=Math.acos(l),u=Math.sin(c);a=Math.sin(a*c)/u,e=Math.sin(e*c)/u,this._x=this._x*a+i*e,this._y=this._y*a+s*e,this._z=this._z*a+r*e,this._w=this._w*a+o*e,this._onChangeCallback()}else this._x=this._x*a+i*e,this._y=this._y*a+s*e,this._z=this._z*a+r*e,this._w=this._w*a+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},uh=class uh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,l=t.z,a=t.w,c=2*(o*s-l*i),u=2*(l*e-r*s),h=2*(r*i-o*e);return this.x=e+a*c+o*h-l*u,this.y=i+a*u+l*c-r*h,this.z=s+a*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this.z=ve(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this.z=ve(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ve(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,l=e.y,a=e.z;return this.x=s*a-r*l,this.y=r*o-i*a,this.z=i*l-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return rc.copy(this).projectOnVector(t),this.sub(rc)}reflect(t){return this.sub(rc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uh.prototype.isVector3=!0;var J=uh,rc=new J,qu=new ci,fh=class fh{constructor(t,e,i,s,r,o,l,a,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,l,a,c)}set(t,e,i,s,r,o,l,a,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=l,u[3]=e,u[4]=r,u[5]=a,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],l=i[3],a=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],_=i[8],v=s[0],p=s[3],x=s[6],T=s[1],L=s[4],b=s[7],A=s[2],E=s[5],D=s[8];return r[0]=o*v+l*T+a*A,r[3]=o*p+l*L+a*E,r[6]=o*x+l*b+a*D,r[1]=c*v+u*T+h*A,r[4]=c*p+u*L+h*E,r[7]=c*x+u*b+h*D,r[2]=f*v+m*T+_*A,r[5]=f*p+m*L+_*E,r[8]=f*x+m*b+_*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],l=t[5],a=t[6],c=t[7],u=t[8];return e*o*u-e*l*c-i*r*u+i*l*a+s*r*c-s*o*a}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],l=t[5],a=t[6],c=t[7],u=t[8],h=u*o-l*c,f=l*a-u*r,m=c*r-o*a,_=e*h+i*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return t[0]=h*v,t[1]=(s*c-u*i)*v,t[2]=(l*i-s*o)*v,t[3]=f*v,t[4]=(u*e-s*a)*v,t[5]=(s*r-l*e)*v,t[6]=m*v,t[7]=(i*a-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,l){let a=Math.cos(r),c=Math.sin(r);return this.set(i*a,i*c,-i*(a*o+c*l)+o+t,-s*c,s*a,-s*(-c*o+a*l)+l+e,0,0,1),this}scale(t,e){return cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(oc.makeScale(t,e)),this}rotate(t){return cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(oc.makeRotation(-t)),this}translate(t,e){return cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(oc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};fh.prototype.isMatrix3=!0;var oe=fh,oc=new oe,Yu=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$u=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dm(){let n={enabled:!0,workingColorSpace:Ar,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ce&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ce&&(s.r=Xs(s.r),s.g=Xs(s.g),s.b=Xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wi?Tr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ar]:{primaries:t,whitePoint:i,transfer:Tr,toXYZ:Yu,fromXYZ:$u,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:t,whitePoint:i,transfer:Ce,toXYZ:Yu,fromXYZ:$u,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),n}var xe=dm();function bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Rs,ma=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Rs===void 0&&(Rs=Cr("canvas")),Rs.width=t.width,Rs.height=t.height;let s=Rs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Rs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Cr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(bi(e[i]/255)*255):e[i]=bi(e[i]);return{data:e,width:t.width,height:t.height}}else return te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},pm=0,$s=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=ki(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(ac(s[o].image)):r.push(ac(s[o]))}else r=ac(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function ac(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ma.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(te("Texture: Unable to serialize Texture."),{})}var mm=0,lc=new J,cn=class n extends li{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=oi,s=oi,r=je,o=Ki,l=kn,a=Nn,c=n.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=ki(),this.name="",this.source=new $s(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=a,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(lc).x}get height(){return this.source.getSize(lc).y}get depth(){return this.source.getSize(lc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){te(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){te(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ua:t.x=t.x-Math.floor(t.x);break;case oi:t.x=t.x<0?0:1;break;case fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ua:t.y=t.y-Math.floor(t.y);break;case oi:t.y=t.y<0?0:1;break;case fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Zc;cn.DEFAULT_ANISOTROPY=1;var dh=class dh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,a=t.elements,c=a[0],u=a[4],h=a[8],f=a[1],m=a[5],_=a[9],v=a[2],p=a[6],x=a[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let L=(c+1)/2,b=(m+1)/2,A=(x+1)/2,E=(u+f)/4,D=(h+v)/4,M=(_+p)/4;return L>b&&L>A?L<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(L),s=E/i,r=D/i):b>A?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=E/s,r=M/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=D/r,s=M/r),this.set(i,s,r,e),this}let T=Math.sqrt((p-_)*(p-_)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(p-_)/T,this.y=(h-v)/T,this.z=(f-u)/T,this.w=Math.acos((c+m+x-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this.z=ve(this.z,t.z,e.z),this.w=ve(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this.z=ve(this.z,t,e),this.w=ve(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ve(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dh.prototype.isVector4=!0;var He=dh,ga=class extends li{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new He(0,0,t,e),this.scissorTest=!1,this.viewport=new He(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new cn(s),o=i.count;for(let l=0;l<o;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new $s(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends ga{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Pr=class extends cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var xa=class extends cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var za=class za{constructor(t,e,i,s,r,o,l,a,c,u,h,f,m,_,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,l,a,c,u,h,f,m,_,v,p)}set(t,e,i,s,r,o,l,a,c,u,h,f,m,_,v,p){let x=this.elements;return x[0]=t,x[4]=e,x[8]=i,x[12]=s,x[1]=r,x[5]=o,x[9]=l,x[13]=a,x[2]=c,x[6]=u,x[10]=h,x[14]=f,x[3]=m,x[7]=_,x[11]=v,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new za().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Cs.setFromMatrixColumn(t,0).length(),r=1/Cs.setFromMatrixColumn(t,1).length(),o=1/Cs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),l=Math.sin(i),a=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,m=o*h,_=l*u,v=l*h;e[0]=a*u,e[4]=-a*h,e[8]=c,e[1]=m+_*c,e[5]=f-v*c,e[9]=-l*a,e[2]=v-f*c,e[6]=_+m*c,e[10]=o*a}else if(t.order==="YXZ"){let f=a*u,m=a*h,_=c*u,v=c*h;e[0]=f+v*l,e[4]=_*l-m,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-l,e[2]=m*l-_,e[6]=v+f*l,e[10]=o*a}else if(t.order==="ZXY"){let f=a*u,m=a*h,_=c*u,v=c*h;e[0]=f-v*l,e[4]=-o*h,e[8]=_+m*l,e[1]=m+_*l,e[5]=o*u,e[9]=v-f*l,e[2]=-o*c,e[6]=l,e[10]=o*a}else if(t.order==="ZYX"){let f=o*u,m=o*h,_=l*u,v=l*h;e[0]=a*u,e[4]=_*c-m,e[8]=f*c+v,e[1]=a*h,e[5]=v*c+f,e[9]=m*c-_,e[2]=-c,e[6]=l*a,e[10]=o*a}else if(t.order==="YZX"){let f=o*a,m=o*c,_=l*a,v=l*c;e[0]=a*u,e[4]=v-f*h,e[8]=_*h+m,e[1]=h,e[5]=o*u,e[9]=-l*u,e[2]=-c*u,e[6]=m*h+_,e[10]=f-v*h}else if(t.order==="XZY"){let f=o*a,m=o*c,_=l*a,v=l*c;e[0]=a*u,e[4]=-h,e[8]=c*u,e[1]=f*h+v,e[5]=o*u,e[9]=m*h-_,e[2]=_*h-m,e[6]=l*u,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gm,t,xm)}lookAt(t,e,i){let s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Ui.crossVectors(i,Pn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Ui.crossVectors(i,Pn)),Ui.normalize(),Ao.crossVectors(Pn,Ui),s[0]=Ui.x,s[4]=Ao.x,s[8]=Pn.x,s[1]=Ui.y,s[5]=Ao.y,s[9]=Pn.y,s[2]=Ui.z,s[6]=Ao.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],l=i[4],a=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],_=i[2],v=i[6],p=i[10],x=i[14],T=i[3],L=i[7],b=i[11],A=i[15],E=s[0],D=s[4],M=s[8],w=s[12],C=s[1],N=s[5],X=s[9],U=s[13],P=s[2],k=s[6],Z=s[10],K=s[14],st=s[3],O=s[7],ot=s[11],it=s[15];return r[0]=o*E+l*C+a*P+c*st,r[4]=o*D+l*N+a*k+c*O,r[8]=o*M+l*X+a*Z+c*ot,r[12]=o*w+l*U+a*K+c*it,r[1]=u*E+h*C+f*P+m*st,r[5]=u*D+h*N+f*k+m*O,r[9]=u*M+h*X+f*Z+m*ot,r[13]=u*w+h*U+f*K+m*it,r[2]=_*E+v*C+p*P+x*st,r[6]=_*D+v*N+p*k+x*O,r[10]=_*M+v*X+p*Z+x*ot,r[14]=_*w+v*U+p*K+x*it,r[3]=T*E+L*C+b*P+A*st,r[7]=T*D+L*N+b*k+A*O,r[11]=T*M+L*X+b*Z+A*ot,r[15]=T*w+L*U+b*K+A*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],l=t[5],a=t[9],c=t[13],u=t[2],h=t[6],f=t[10],m=t[14],_=t[3],v=t[7],p=t[11],x=t[15],T=a*m-c*f,L=l*m-c*h,b=l*f-a*h,A=o*m-c*u,E=o*f-a*u,D=o*h-l*u;return e*(v*T-p*L+x*b)-i*(_*T-p*A+x*E)+s*(_*L-v*A+x*D)-r*(_*b-v*E+p*D)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],l=t[9],a=t[2],c=t[6],u=t[10];return e*(o*u-l*c)-i*(r*u-l*a)+s*(r*c-o*a)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],l=t[5],a=t[6],c=t[7],u=t[8],h=t[9],f=t[10],m=t[11],_=t[12],v=t[13],p=t[14],x=t[15],T=e*l-i*o,L=e*a-s*o,b=e*c-r*o,A=i*a-s*l,E=i*c-r*l,D=s*c-r*a,M=u*v-h*_,w=u*p-f*_,C=u*x-m*_,N=h*p-f*v,X=h*x-m*v,U=f*x-m*p,P=T*U-L*X+b*N+A*C-E*w+D*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/P;return t[0]=(l*U-a*X+c*N)*k,t[1]=(s*X-i*U-r*N)*k,t[2]=(v*D-p*E+x*A)*k,t[3]=(f*E-h*D-m*A)*k,t[4]=(a*C-o*U-c*w)*k,t[5]=(e*U-s*C+r*w)*k,t[6]=(p*b-_*D-x*L)*k,t[7]=(u*D-f*b+m*L)*k,t[8]=(o*X-l*C+c*M)*k,t[9]=(i*C-e*X-r*M)*k,t[10]=(_*E-v*b+x*T)*k,t[11]=(h*b-u*E-m*T)*k,t[12]=(l*w-o*N-a*M)*k,t[13]=(e*N-i*w+s*M)*k,t[14]=(v*L-_*A-p*T)*k,t[15]=(u*A-h*L+f*T)*k,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,l=t.y,a=t.z,c=r*o,u=r*l;return this.set(c*o+i,c*l-s*a,c*a+s*l,0,c*l+s*a,u*l+i,u*a-s*o,0,c*a-s*l,u*a+s*o,r*a*a+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,l=e._z,a=e._w,c=r+r,u=o+o,h=l+l,f=r*c,m=r*u,_=r*h,v=o*u,p=o*h,x=l*h,T=a*c,L=a*u,b=a*h,A=i.x,E=i.y,D=i.z;return s[0]=(1-(v+x))*A,s[1]=(m+b)*A,s[2]=(_-L)*A,s[3]=0,s[4]=(m-b)*E,s[5]=(1-(f+x))*E,s[6]=(p+T)*E,s[7]=0,s[8]=(_+L)*D,s[9]=(p-T)*D,s[10]=(1-(f+v))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Cs.set(s[0],s[1],s[2]).length(),l=Cs.set(s[4],s[5],s[6]).length(),a=Cs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Wn.copy(this);let c=1/o,u=1/l,h=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,e.setFromRotationMatrix(Wn),i.x=o,i.y=l,i.z=a,this}makePerspective(t,e,i,s,r,o,l=$n,a=!1){let c=this.elements,u=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),m=(i+s)/(i-s),_,v;if(a)_=r/(o-r),v=o*r/(o-r);else if(l===$n)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(l===Rr)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,l=$n,a=!1){let c=this.elements,u=2/(e-t),h=2/(i-s),f=-(e+t)/(e-t),m=-(i+s)/(i-s),_,v;if(a)_=1/(o-r),v=o/(o-r);else if(l===$n)_=-2/(o-r),v=-(o+r)/(o-r);else if(l===Rr)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};za.prototype.isMatrix4=!0;var ke=za,Cs=new J,Wn=new ke,gm=new J(0,0,0),xm=new J(1,1,1),Ui=new J,Ao=new J,Pn=new J,Zu=new ke,Ju=new ci,Vi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],l=s[8],a=s[1],c=s[5],u=s[9],h=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(a,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(a,r));break;case"ZYX":this._y=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(a,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:te("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Zu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ju.setFromEuler(this),this.setFromQuaternion(Ju,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vi.DEFAULT_ORDER="XYZ";var Lr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},_m=0,Ku=new J,Is=new ci,_i=new ke,To=new J,xr=new J,ym=new J,vm=new ci,ju=new J(1,0,0),Qu=new J(0,1,0),tf=new J(0,0,1),ef={type:"added"},Mm={type:"removed"},Ps={type:"childadded",child:null},cc={type:"childremoved",child:null},yn=class n extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new J,e=new Vi,i=new ci,s=new J(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new oe}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.multiply(Is),this}rotateOnWorldAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.premultiply(Is),this}rotateX(t){return this.rotateOnAxis(ju,t)}rotateY(t){return this.rotateOnAxis(Qu,t)}rotateZ(t){return this.rotateOnAxis(tf,t)}translateOnAxis(t,e){return Ku.copy(t).applyQuaternion(this.quaternion),this.position.add(Ku.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ju,t)}translateY(t){return this.translateOnAxis(Qu,t)}translateZ(t){return this.translateOnAxis(tf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?To.copy(t):To.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(xr,To,this.up):_i.lookAt(To,xr,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),Is.setFromRotationMatrix(_i),this.quaternion.premultiply(Is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ef),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mm),cc.child=t,this.dispatchEvent(cc),cc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_i.multiply(t.parent.matrixWorld)),t.applyMatrix4(_i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ef),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,t,ym),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,vm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,a){return l[a.uuid]===void 0&&(l[a.uuid]=a.toJSON(t)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let a=l.shapes;if(Array.isArray(a))for(let c=0,u=a.length;c<u;c++){let h=a[c];r(t.shapes,h)}else r(t.shapes,a)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let a=0,c=this.material.length;a<c;a++)l.push(r(t.materials,this.material[a]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let a=this.animations[l];s.animations.push(r(t.animations,a))}}if(e){let l=o(t.geometries),a=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),m=o(t.animations),_=o(t.nodes);l.length>0&&(i.geometries=l),a.length>0&&(i.materials=a),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(l){let a=[];for(let c in l){let u=l[c];delete u.metadata,a.push(u)}return a}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yn.DEFAULT_UP=new J(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=class extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sm={type:"move"},Zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new On,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new On,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new On,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,l=this._targetRay,a=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,i),x=this._getHandJoint(c,v);p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=p.radius),x.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else a!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,a.eventsEnabled&&a.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Sm)))}return l!==null&&(l.visible=s!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new On;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function hc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ie=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=xe.workingColorSpace){return this.r=t,this.g=e,this.b=i,xe.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=xe.workingColorSpace){if(t=fm(t,1),e=ve(e,0,1),i=ve(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=hc(o,r,t+1/3),this.g=hc(o,r,t),this.b=hc(o,r,t-1/3)}return xe.colorSpaceToWorking(this,s),this}setStyle(t,e=on){function i(r){r!==void 0&&parseFloat(r)<1&&te("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:te("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);te("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){let i=nd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):te("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return xe.workingToColorSpace(dn.copy(this),t),Math.round(ve(dn.r*255,0,255))*65536+Math.round(ve(dn.g*255,0,255))*256+Math.round(ve(dn.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(dn.copy(this),e);let i=dn.r,s=dn.g,r=dn.b,o=Math.max(i,s,r),l=Math.min(i,s,r),a,c,u=(l+o)/2;if(l===o)a=0,c=0;else{let h=o-l;switch(c=u<=.5?h/(o+l):h/(2-o-l),o){case i:a=(s-r)/h+(s<r?6:0);break;case s:a=(r-i)/h+2;break;case r:a=(i-s)/h+4;break}a/=6}return t.h=a,t.s=c,t.l=u,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(dn.copy(this),e),t.r=dn.r,t.g=dn.g,t.b=dn.b,t}getStyle(t=on){xe.workingToColorSpace(dn.copy(this),t);let e=dn.r,i=dn.g,s=dn.b;return t!==on?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Fi),this.setHSL(Fi.h+t,Fi.s+e,Fi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Fi),t.getHSL(Ro);let i=sc(Fi.h,Ro.h,e),s=sc(Fi.s,Ro.s,e),r=sc(Fi.l,Ro.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new ie;ie.NAMES=nd;var Dr=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Xn=new J,yi=new J,uc=new J,vi=new J,Ls=new J,Ds=new J,nf=new J,fc=new J,dc=new J,pc=new J,mc=new He,gc=new He,xc=new He,ri=class n{constructor(t=new J,e=new J,i=new J){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Xn.subVectors(t,e),s.cross(Xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Xn.subVectors(s,e),yi.subVectors(i,e),uc.subVectors(t,e);let o=Xn.dot(Xn),l=Xn.dot(yi),a=Xn.dot(uc),c=yi.dot(yi),u=yi.dot(uc),h=o*c-l*l;if(h===0)return r.set(0,0,0),null;let f=1/h,m=(c*a-l*u)*f,_=(o*u-l*a)*f;return r.set(1-m-_,_,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,e,i,s,r,o,l,a){return this.getBarycoord(t,e,i,s,vi)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(r,vi.x),a.addScaledVector(o,vi.y),a.addScaledVector(l,vi.z),a)}static getInterpolatedAttribute(t,e,i,s,r,o){return mc.setScalar(0),gc.setScalar(0),xc.setScalar(0),mc.fromBufferAttribute(t,e),gc.fromBufferAttribute(t,i),xc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(mc,r.x),o.addScaledVector(gc,r.y),o.addScaledVector(xc,r.z),o}static isFrontFacing(t,e,i,s){return Xn.subVectors(i,e),yi.subVectors(t,e),Xn.cross(yi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Xn.cross(yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,l;Ls.subVectors(s,i),Ds.subVectors(r,i),fc.subVectors(t,i);let a=Ls.dot(fc),c=Ds.dot(fc);if(a<=0&&c<=0)return e.copy(i);dc.subVectors(t,s);let u=Ls.dot(dc),h=Ds.dot(dc);if(u>=0&&h<=u)return e.copy(s);let f=a*h-u*c;if(f<=0&&a>=0&&u<=0)return o=a/(a-u),e.copy(i).addScaledVector(Ls,o);pc.subVectors(t,r);let m=Ls.dot(pc),_=Ds.dot(pc);if(_>=0&&m<=_)return e.copy(r);let v=m*c-a*_;if(v<=0&&c>=0&&_<=0)return l=c/(c-_),e.copy(i).addScaledVector(Ds,l);let p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return nf.subVectors(r,s),l=(h-u)/(h-u+(m-_)),e.copy(s).addScaledVector(nf,l);let x=1/(p+v+f);return o=v*x,l=f*x,e.copy(i).addScaledVector(Ls,o).addScaledVector(Ds,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gi=class{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)t.isMesh===!0?t.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(t.matrixWorld),this.expandByPoint(qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Co.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Co.copy(i.boundingBox)),Co.applyMatrix4(t.matrixWorld),this.union(Co)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_r),Io.subVectors(this.max,_r),Ns.subVectors(t.a,_r),Us.subVectors(t.b,_r),Fs.subVectors(t.c,_r),Oi.subVectors(Us,Ns),Bi.subVectors(Fs,Us),rs.subVectors(Ns,Fs);let e=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-rs.z,rs.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,rs.z,0,-rs.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-rs.y,rs.x,0];return!_c(e,Ns,Us,Fs,Io)||(e=[1,0,0,0,1,0,0,0,1],!_c(e,Ns,Us,Fs,Io))?!1:(Po.crossVectors(Oi,Bi),e=[Po.x,Po.y,Po.z],_c(e,Ns,Us,Fs,Io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Mi=[new J,new J,new J,new J,new J,new J,new J,new J],qn=new J,Co=new Gi,Ns=new J,Us=new J,Fs=new J,Oi=new J,Bi=new J,rs=new J,_r=new J,Io=new J,Po=new J,os=new J;function _c(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){os.fromArray(n,r);let l=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),a=t.dot(os),c=e.dot(os),u=i.dot(os);if(Math.max(-Math.max(a,c,u),Math.min(a,c,u))>l)return!1}return!0}var Ke=new J,Lo=new fe,bm=0,Ye=class extends li{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=sh,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Lo.fromBufferAttribute(this,e),Lo.applyMatrix3(t),this.setXY(e,Lo.x,Lo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix3(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=si(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=si(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=si(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=si(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Nr=class extends Ye{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ur=class extends Ye{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var _n=class extends Ye{constructor(t,e,i){super(new Float32Array(t),e,i)}},wm=new Gi,yr=new J,yc=new J,Hi=class{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):wm.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yr.subVectors(t,this.center);let e=yr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(yr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yr.copy(t.center).add(yc)),this.expandByPoint(yr.copy(t.center).sub(yc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Em=0,Fn=new ke,vc=new yn,Os=new J,Ln=new Gi,vr=new Gi,rn=new J,tn=class n extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hm(t)?Ur:Nr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new oe().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Fn.makeRotationFromQuaternion(t),this.applyMatrix4(Fn),this}rotateX(t){return Fn.makeRotationX(t),this.applyMatrix4(Fn),this}rotateY(t){return Fn.makeRotationY(t),this.applyMatrix4(Fn),this}rotateZ(t){return Fn.makeRotationZ(t),this.applyMatrix4(Fn),this}translate(t,e,i){return Fn.makeTranslation(t,e,i),this.applyMatrix4(Fn),this}scale(t,e,i){return Fn.makeScale(t,e,i),this.applyMatrix4(Fn),this}lookAt(t){return vc.lookAt(t),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _n(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){let i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let l=e[r];vr.setFromBufferAttribute(l),this.morphTargetsRelative?(rn.addVectors(Ln.min,vr.min),Ln.expandByPoint(rn),rn.addVectors(Ln.max,vr.max),Ln.expandByPoint(rn)):(Ln.expandByPoint(vr.min),Ln.expandByPoint(vr.max))}Ln.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)rn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(rn));if(e)for(let r=0,o=e.length;r<o;r++){let l=e[r],a=this.morphTargetsRelative;for(let c=0,u=l.count;c<u;c++)rn.fromBufferAttribute(l,c),a&&(Os.fromBufferAttribute(t,c),rn.add(Os)),s=Math.max(s,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ye(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let l=[],a=[];for(let M=0;M<i.count;M++)l[M]=new J,a[M]=new J;let c=new J,u=new J,h=new J,f=new fe,m=new fe,_=new fe,v=new J,p=new J;function x(M,w,C){c.fromBufferAttribute(i,M),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,C),f.fromBufferAttribute(r,M),m.fromBufferAttribute(r,w),_.fromBufferAttribute(r,C),u.sub(c),h.sub(c),m.sub(f),_.sub(f);let N=1/(m.x*_.y-_.x*m.y);isFinite(N)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(N),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(N),l[M].add(v),l[w].add(v),l[C].add(v),a[M].add(p),a[w].add(p),a[C].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let M=0,w=T.length;M<w;++M){let C=T[M],N=C.start,X=C.count;for(let U=N,P=N+X;U<P;U+=3)x(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let L=new J,b=new J,A=new J,E=new J;function D(M){A.fromBufferAttribute(s,M),E.copy(A);let w=l[M];L.copy(w),L.sub(A.multiplyScalar(A.dot(w))).normalize(),b.crossVectors(E,w);let N=b.dot(a[M])<0?-1:1;o.setXYZW(M,L.x,L.y,L.z,N)}for(let M=0,w=T.length;M<w;++M){let C=T[M],N=C.start,X=C.count;for(let U=N,P=N+X;U<P;U+=3)D(t.getX(U+0)),D(t.getX(U+1)),D(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let s=new J,r=new J,o=new J,l=new J,a=new J,c=new J,u=new J,h=new J;if(t)for(let f=0,m=t.count;f<m;f+=3){let _=t.getX(f+0),v=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),l.fromBufferAttribute(i,_),a.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),l.add(u),a.add(u),c.add(u),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(l,a){let c=l.array,u=l.itemSize,h=l.normalized,f=new c.constructor(a.length*u),m=0,_=0;for(let v=0,p=a.length;v<p;v++){l.isInterleavedBufferAttribute?m=a[v]*l.data.stride+l.offset:m=a[v]*u;for(let x=0;x<u;x++)f[_++]=c[m++]}return new Ye(f,u,h)}if(this.index===null)return te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let l in s){let a=s[l],c=t(a,i);e.setAttribute(l,c)}let r=this.morphAttributes;for(let l in r){let a=[],c=r[l];for(let u=0,h=c.length;u<h;u++){let f=c[u],m=t(f,i);a.push(m)}e.morphAttributes[l]=a}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let l=0,a=o.length;l<a;l++){let c=o[l];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let c in a)a[c]!==void 0&&(t[c]=a[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let a in i){let c=i[a];t.data.attributes[a]=c.toJSON(t.data)}let s={},r=!1;for(let a in this.morphAttributes){let c=this.morphAttributes[a],u=[];for(let h=0,f=c.length;h<f;h++){let m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(s[a]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},_a=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=sh,this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},xn=new J,Fr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix4(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xn.fromBufferAttribute(this,e),xn.applyNormalMatrix(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xn.fromBufferAttribute(this,e),xn.transformDirection(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=si(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ue(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=si(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=si(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=si(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=si(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),s=Ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ir("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ir("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Mc=new J,Am=new J,Tm=new oe,Yn=class{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Mc.subVectors(i,e).cross(Am.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Mc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Tm.getNormalMatrix(t),s=this.coplanarPoint(Mc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Rm=0,hi=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=Qs,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=kc,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=na,this.stencilZFail=na,this.stencilZPass=na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){te(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){te(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let l in r){let a=r[l];delete a.metadata,o.push(a)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ie().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Yn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new fe().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new fe().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Wi=class extends hi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Bs,Mr=new J,zs=new J,ks=new J,Vs=new fe,Sr=new fe,id=new ke,Do=new J,br=new J,No=new J,sf=new fe,Sc=new fe,rf=new fe,hs=class extends yn{constructor(t=new Wi){if(super(),this.isSprite=!0,this.type="Sprite",Bs===void 0){Bs=new tn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new _a(e,5);Bs.setIndex([0,1,2,0,2,3]),Bs.setAttribute("position",new Fr(i,3,0,!1)),Bs.setAttribute("uv",new Fr(i,2,3,!1))}this.geometry=Bs,this.material=t,this.center=new fe(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zs.setFromMatrixScale(this.matrixWorld),id.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ks.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zs.multiplyScalar(-ks.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Uo(Do.set(-.5,-.5,0),ks,o,zs,s,r),Uo(br.set(.5,-.5,0),ks,o,zs,s,r),Uo(No.set(.5,.5,0),ks,o,zs,s,r),sf.set(0,0),Sc.set(1,0),rf.set(1,1);let l=t.ray.intersectTriangle(Do,br,No,!1,Mr);if(l===null&&(Uo(br.set(-.5,.5,0),ks,o,zs,s,r),Sc.set(0,1),l=t.ray.intersectTriangle(Do,No,br,!1,Mr),l===null))return;let a=t.ray.origin.distanceTo(Mr);a<t.near||a>t.far||e.push({distance:a,point:Mr.clone(),uv:ri.getInterpolation(Mr,Do,br,No,sf,Sc,rf,new fe),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Uo(n,t,e,i,s,r){Vs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Sr.x=r*Vs.x-s*Vs.y,Sr.y=s*Vs.x+r*Vs.y):Sr.copy(Vs),n.copy(t),n.x+=Sr.x,n.y+=Sr.y,n.applyMatrix4(id)}var Si=new J,bc=new J,Fo=new J,Oo=new J,Js=class{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Si.copy(this.origin).addScaledVector(this.direction,e),Si.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){bc.copy(t).add(e).multiplyScalar(.5),Fo.copy(e).sub(t).normalize(),Oo.copy(this.origin).sub(bc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Fo),l=Oo.dot(this.direction),a=-Oo.dot(Fo),c=Oo.lengthSq(),u=Math.abs(1-o*o),h,f,m,_;if(u>0)if(h=o*a-l,f=o*l-a,_=r*u,h>=0)if(f>=-_)if(f<=_){let v=1/u;h*=v,f*=v,m=h*(h+o*f+2*l)+f*(o*h+f+2*a)+c}else f=r,h=Math.max(0,-(o*f+l)),m=-h*h+f*(f+2*a)+c;else f=-r,h=Math.max(0,-(o*f+l)),m=-h*h+f*(f+2*a)+c;else f<=-_?(h=Math.max(0,-(-o*r+l)),f=h>0?-r:Math.min(Math.max(-r,-a),r),m=-h*h+f*(f+2*a)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-a),r),m=f*(f+2*a)+c):(h=Math.max(0,-(o*r+l)),f=h>0?r:Math.min(Math.max(-r,-a),r),m=-h*h+f*(f+2*a)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+l)),m=-h*h+f*(f+2*a)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(bc).addScaledVector(Fo,f),m}intersectSphere(t,e){if(t.radius<0)return null;Si.subVectors(t.center,this.origin);let i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),l=i-o,a=i+o;return a<0?null:l<0?this.at(a,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,l,a,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(l=(t.min.z-f.z)*h,a=(t.max.z-f.z)*h):(l=(t.max.z-f.z)*h,a=(t.min.z-f.z)*h),i>a||l>s)||((l>i||i!==i)&&(i=l),(a<s||s!==s)&&(s=a),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Si)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,l=this.direction,a=l.x,c=l.y,u=l.z,h=t.x-o.x,f=t.y-o.y,m=t.z-o.z,_=e.x-o.x,v=e.y-o.y,p=e.z-o.z,x=i.x-o.x,T=i.y-o.y,L=i.z-o.z,b=Math.abs(a),A=Math.abs(c),E=Math.abs(u),D,M,w,C,N,X,U,P,k,Z,K,st;if(b>=A&&b>=E?(w=a,X=h,k=_,st=x,a>=0?(D=c,M=u,C=f,N=m,U=v,P=p,Z=T,K=L):(D=u,M=c,C=m,N=f,U=p,P=v,Z=L,K=T)):A>=E?(w=c,X=f,k=v,st=T,c>=0?(D=u,M=a,C=m,N=h,U=p,P=_,Z=L,K=x):(D=a,M=u,C=h,N=m,U=_,P=p,Z=x,K=L)):(w=u,X=m,k=p,st=L,u>=0?(D=a,M=c,C=h,N=f,U=_,P=v,Z=x,K=T):(D=c,M=a,C=f,N=h,U=v,P=_,Z=T,K=x)),w===0)return null;let O=D/w,ot=M/w,it=1/w,Mt=C-O*X,gt=N-ot*X,vt=U-O*k,bt=P-ot*k,_t=Z-O*st,$=K-ot*st,nt=_t*bt-$*vt,xt=Mt*$-gt*_t,Lt=vt*gt-bt*Mt;if(s){if(nt<0||xt<0||Lt<0)return null}else if((nt<0||xt<0||Lt<0)&&(nt>0||xt>0||Lt>0))return null;let ft=nt+xt+Lt;if(ft===0)return null;let Ft=it*(nt*X+xt*k+Lt*st);return(ft>0?Ft<0:Ft>0)?null:this.at(Ft/ft,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bn=class extends hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},of=new ke,as=new Js,Bo=new Hi,af=new J,zo=new J,ko=new J,Vo=new J,wc=new J,Go=new J,lf=new J,Ho=new J,We=class extends yn{constructor(t=new tn,e=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){Go.set(0,0,0);for(let a=0,c=r.length;a<c;a++){let u=l[a],h=r[a];u!==0&&(wc.fromBufferAttribute(h,t),o?Go.addScaledVector(wc,u):Go.addScaledVector(wc.sub(e),u))}e.add(Go)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(r),as.copy(t.ray).recast(t.near),!(Bo.containsPoint(as.origin)===!1&&(as.intersectSphere(Bo,af)===null||as.origin.distanceToSquared(af)>(t.far-t.near)**2))&&(of.copy(r).invert(),as.copy(t.ray).applyMatrix4(of),!(i.boundingBox!==null&&as.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,as)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,l=r.index,a=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(l!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){let p=f[_],x=o[p.materialIndex],T=Math.max(p.start,m.start),L=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=T,A=L;b<A;b+=3){let E=l.getX(b),D=l.getX(b+1),M=l.getX(b+2);s=Wo(this,x,t,i,c,u,h,E,D,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=_,x=v;p<x;p+=3){let T=l.getX(p),L=l.getX(p+1),b=l.getX(p+2);s=Wo(this,o,t,i,c,u,h,T,L,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(a!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){let p=f[_],x=o[p.materialIndex],T=Math.max(p.start,m.start),L=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=T,A=L;b<A;b+=3){let E=b,D=b+1,M=b+2;s=Wo(this,x,t,i,c,u,h,E,D,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=_,x=v;p<x;p+=3){let T=p,L=p+1,b=p+2;s=Wo(this,o,t,i,c,u,h,T,L,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Cm(n,t,e,i,s,r,o,l){let a;if(t.side===Mn?a=i.intersectTriangle(o,r,s,!0,l):a=i.intersectTriangle(s,r,o,t.side===Zi,l),a===null)return null;Ho.copy(l),Ho.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Ho);return c<e.near||c>e.far?null:{distance:c,point:Ho.clone(),object:n}}function Wo(n,t,e,i,s,r,o,l,a,c){n.getVertexPosition(l,zo),n.getVertexPosition(a,ko),n.getVertexPosition(c,Vo);let u=Cm(n,t,e,i,zo,ko,Vo,lf);if(u){let h=new J;ri.getBarycoord(lf,zo,ko,Vo,h),s&&(u.uv=ri.getInterpolatedAttribute(s,l,a,c,h,new fe)),r&&(u.uv1=ri.getInterpolatedAttribute(r,l,a,c,h,new fe)),o&&(u.normal=ri.getInterpolatedAttribute(o,l,a,c,h,new J),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a:l,b:a,c,normal:new J,materialIndex:0};ri.getNormal(zo,ko,Vo,f.normal),u.face=f,u.barycoord=h}return u}var ya=class extends cn{constructor(t=null,e=1,i=1,s,r,o,l,a,c=an,u=an,h,f){super(null,o,l,a,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ls=new Hi,Im=new fe(.5,.5),Xo=new J,Or=class{constructor(t=new Yn,e=new Yn,i=new Yn,s=new Yn,r=new Yn,o=new Yn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(i),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=$n,i=!1){let s=this.planes,r=t.elements,o=r[0],l=r[1],a=r[2],c=r[3],u=r[4],h=r[5],f=r[6],m=r[7],_=r[8],v=r[9],p=r[10],x=r[11],T=r[12],L=r[13],b=r[14],A=r[15];if(s[0].setComponents(c-o,m-u,x-_,A-T).normalize(),s[1].setComponents(c+o,m+u,x+_,A+T).normalize(),s[2].setComponents(c+l,m+h,x+v,A+L).normalize(),s[3].setComponents(c-l,m-h,x-v,A-L).normalize(),i)s[4].setComponents(a,f,p,b).normalize(),s[5].setComponents(c-a,m-f,x-p,A-b).normalize();else if(s[4].setComponents(c-a,m-f,x-p,A-b).normalize(),e===$n)s[5].setComponents(c+a,m+f,x+p,A+b).normalize();else if(e===Rr)s[5].setComponents(a,f,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(t){ls.center.set(0,0,0);let e=Im.distanceTo(t.center);return ls.radius=.7071067811865476+e,ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Xo.x=s.normal.x>0?t.max.x:t.min.x,Xo.y=s.normal.y>0?t.max.y:t.min.y,Xo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var us=class extends hi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},va=new J,Ma=new J,cf=new ke,wr=new Js,qo=new Hi,Ec=new J,hf=new J,Sa=class extends yn{constructor(t=new tn,e=new us){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)va.fromBufferAttribute(e,s-1),Ma.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=va.distanceTo(Ma);t.setAttribute("lineDistance",new _n(i,1))}else te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qo.copy(i.boundingSphere),qo.applyMatrix4(s),qo.radius+=r,t.ray.intersectsSphere(qo)===!1)return;cf.copy(s).invert(),wr.copy(t.ray).applyMatrix4(cf);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let m=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=m,p=_-1;v<p;v+=c){let x=u.getX(v),T=u.getX(v+1),L=Yo(this,t,wr,a,x,T,v);L&&e.push(L)}if(this.isLineLoop){let v=u.getX(_-1),p=u.getX(m),x=Yo(this,t,wr,a,v,p,_-1);x&&e.push(x)}}else{let m=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let v=m,p=_-1;v<p;v+=c){let x=Yo(this,t,wr,a,v,v+1,v);x&&e.push(x)}if(this.isLineLoop){let v=Yo(this,t,wr,a,_-1,m,_-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Yo(n,t,e,i,s,r,o){let l=n.geometry.attributes.position;if(va.fromBufferAttribute(l,s),Ma.fromBufferAttribute(l,r),e.distanceSqToSegment(va,Ma,Ec,hf)>i)return;Ec.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ec);if(!(c<t.near||c>t.far))return{distance:c,point:hf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var uf=new J,ff=new J,fs=class extends Sa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)uf.fromBufferAttribute(e,s),ff.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+uf.distanceTo(ff);t.setAttribute("lineDistance",new _n(i,1))}else te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ks=class extends hi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},df=new ke,Lc=new Js,$o=new Hi,Zo=new J,Br=class extends yn{constructor(t=new tn,e=new Ks){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$o.copy(i.boundingSphere),$o.applyMatrix4(s),$o.radius+=r,t.ray.intersectsSphere($o)===!1)return;df.copy(s).invert(),Lc.copy(t.ray).applyMatrix4(df);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=f,v=m;_<v;_++){let p=c.getX(_);Zo.fromBufferAttribute(h,p),pf(Zo,p,a,s,t,e,this)}}else{let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,v=m;_<v;_++)Zo.fromBufferAttribute(h,_),pf(Zo,_,a,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function pf(n,t,e,i,s,r,o){let l=Lc.distanceSqToPoint(n);if(l<e){let a=new J;Lc.closestPointToPoint(n,a),a.applyMatrix4(i);let c=s.ray.origin.distanceTo(a);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(l),point:a,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var zr=class extends cn{constructor(t=[],e=Ji,i,s,r,o,l,a,c,u){super(t,e,i,s,r,o,l,a,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ui=class extends cn{constructor(t,e,i,s,r,o,l,a,c){super(t,e,i,s,r,o,l,a,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Xi=class extends cn{constructor(t,e,i=Jn,s,r,o,l=an,a=an,c,u=ai,h=1){if(u!==ai&&u!==ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,o,l,a,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $s(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ba=class extends Xi{constructor(t,e=Jn,i=Ji,s,r,o=an,l=an,a,c=ai){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,l,a,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},kr=class extends cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},vn=class n extends tn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let a=[],c=[],u=[],h=[],f=0,m=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(a),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(u,3)),this.setAttribute("uv",new _n(h,2));function _(v,p,x,T,L,b,A,E,D,M,w){let C=b/D,N=A/M,X=b/2,U=A/2,P=E/2,k=D+1,Z=M+1,K=0,st=0,O=new J;for(let ot=0;ot<Z;ot++){let it=ot*N-U;for(let Mt=0;Mt<k;Mt++){let gt=Mt*C-X;O[v]=gt*T,O[p]=it*L,O[x]=P,c.push(O.x,O.y,O.z),O[v]=0,O[p]=0,O[x]=E>0?1:-1,u.push(O.x,O.y,O.z),h.push(Mt/D),h.push(1-ot/M),K+=1}}for(let ot=0;ot<M;ot++)for(let it=0;it<D;it++){let Mt=f+it+k*ot,gt=f+it+k*(ot+1),vt=f+(it+1)+k*(ot+1),bt=f+(it+1)+k*ot;a.push(Mt,gt,bt),a.push(gt,vt,bt),st+=6}l.addGroup(m,st,w),m+=st,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Jo=new J,Ko=new J,Ac=new J,jo=new ri,Vr=class extends tn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(ia*e),o=t.getIndex(),l=t.getAttribute("position"),a=o?o.count:l.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},m=[];for(let _=0;_<a;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);let{a:v,b:p,c:x}=jo;if(v.fromBufferAttribute(l,c[0]),p.fromBufferAttribute(l,c[1]),x.fromBufferAttribute(l,c[2]),jo.getNormal(Ac),h[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,h[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,h[2]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let T=0;T<3;T++){let L=(T+1)%3,b=h[T],A=h[L],E=jo[u[T]],D=jo[u[L]],M=`${b}_${A}`,w=`${A}_${b}`;w in f&&f[w]?(Ac.dot(f[w].normal)<=r&&(m.push(E.x,E.y,E.z),m.push(D.x,D.y,D.z)),f[w]=null):M in f||(f[M]={index0:c[T],index1:c[L],normal:Ac.clone()})}}for(let _ in f)if(f[_]){let{index0:v,index1:p}=f[_];Jo.fromBufferAttribute(l,v),Ko.fromBufferAttribute(l,p),m.push(Jo.x,Jo.y,Jo.z),m.push(Ko.x,Ko.y,Ko.z)}this.setAttribute("position",new _n(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var Gr=class n extends tn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,l=Math.floor(i),a=Math.floor(s),c=l+1,u=a+1,h=t/l,f=e/a,m=[],_=[],v=[],p=[];for(let x=0;x<u;x++){let T=x*f-o;for(let L=0;L<c;L++){let b=L*h-r;_.push(b,-T,0),v.push(0,0,1),p.push(L/l),p.push(1-x/a)}}for(let x=0;x<a;x++)for(let T=0;T<l;T++){let L=T+c*x,b=T+c*(x+1),A=T+1+c*(x+1),E=T+1+c*x;m.push(L,b,E),m.push(b,A,E)}this.setIndex(m),this.setAttribute("position",new _n(_,3)),this.setAttribute("normal",new _n(v,3)),this.setAttribute("uv",new _n(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function ms(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(mf(s))s.isRenderTargetTexture?(te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(mf(s[0])){let r=[];for(let o=0,l=s.length;o<l;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function gn(n){let t={};for(let e=0;e<n.length;e++){let i=ms(n[e]);for(let s in i)t[s]=i[s]}return t}function mf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Pm(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function oh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}var sd={clone:ms,merge:gn},Lm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lm,this.fragmentShader=Dm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=Pm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ie().setHex(s.value);break;case"v2":this.uniforms[i].value=new fe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new J().fromArray(s.value);break;case"v4":this.uniforms[i].value=new He().fromArray(s.value);break;case"m3":this.uniforms[i].value=new oe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ke().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},wa=class extends mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ea=class extends hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Aa=class extends hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Gs(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Tc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var qi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let l=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===l)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(i=2,r=l);for(let a=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===a)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let l=i+o>>>1;t<e[l]?o=l:i=l+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ta=class extends qi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cc,endingEnd:Cc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,l=s[r],a=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case Ic:r=t,l=2*e-i;break;case Pc:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=i}if(a===void 0)switch(this.getSettings_().endingEnd){case Ic:o=t,a=2*i-e;break;case Pc:o=1,a=i+s[1]-s[0];break;default:o=t-1,a=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-l),this._weightNext=c/(a-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=t*l,c=a-l,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,m=this._weightNext,_=(i-e)/(s-e),v=_*_,p=v*_,x=-f*p+2*f*v-f*_,T=(1+f)*p+(-1.5-2*f)*v+(-.5+f)*_+1,L=(-1-m)*p+(1.5+m)*v+.5*_,b=m*p-m*v;for(let A=0;A!==l;++A)r[A]=x*o[u+A]+T*o[c+A]+L*o[a+A]+b*o[h+A];return r}},Ra=class extends qi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=t*l,c=a-l,u=(i-e)/(s-e),h=1-u;for(let f=0;f!==l;++f)r[f]=o[c+f]*h+o[a+f]*u;return r}},Ca=class extends qi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ia=class extends qi{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=t*l,c=a-l,u=this.inTangents,h=this.outTangents;if(!u||!h){let _=(i-e)/(s-e),v=1-_;for(let p=0;p!==l;++p)r[p]=o[c+p]*v+o[a+p]*_;return r}let f=l*2,m=t-1;for(let _=0;_!==l;++_){let v=o[c+_],p=o[a+_],x=m*f+_*2,T=h[x],L=h[x+1],b=t*f+_*2,A=u[b],E=u[b+1],D=Um(i,e,T,A,s);r[_]=rd(D,v,L,E,p)}return r}};function rd(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Nm(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Um(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let l=rd(r,t,e,i,s)-n;if(Math.abs(l)<1e-10)break;let a=Nm(r,t,e,i,s);if(Math.abs(a)<1e-10)break;r=Math.max(0,Math.min(1,r-l/a))}return r}var Dn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Gs(e,this.TimeBufferType),this.values=Gs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Gs(t.times,Array),values:Gs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Tc(t.settings)&&(i.settings={inTangents:Gs(t.settings.inTangents,Array),outTangents:Gs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ca(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ra(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ia(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Er:e=this.InterpolantFactoryMethodDiscrete;break;case da:e=this.InterpolantFactoryMethodLinear;break;case ea:e=this.InterpolantFactoryMethodSmooth;break;case Rc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return te("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Er;case this.InterpolantFactoryMethodLinear:return da;case this.InterpolantFactoryMethodSmooth:return ea;case this.InterpolantFactoryMethodBezier:return Rc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Tc(this.settings)&&(gf(this.settings.inTangents,t),gf(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let l=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ne("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ne("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let l=0;l!==r;l++){let a=i[l];if(typeof a=="number"&&isNaN(a)){ne("KeyframeTrack: Time is not a valid number.",this,l,a),t=!1;break}if(o!==null&&o>a){ne("KeyframeTrack: Out of order keys.",this,l,a,o),t=!1;break}o=a}if(s!==void 0&&um(s))for(let l=0,a=s.length;l!==a;++l){let c=s[l];if(isNaN(c)){ne("KeyframeTrack: Value is not a valid number.",this,l,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ea,r=t.length-1,o=1;for(let l=1;l<r;++l){let a=!1,c=t[l],u=t[l+1];if(c!==u&&(l!==1||c!==t[0]))if(s)a=!0;else{let h=l*i,f=h-i,m=h+i;for(let _=0;_!==i;++_){let v=e[h+_];if(v!==e[f+_]||v!==e[m+_]){a=!0;break}}}if(a){if(l!==o){t[o]=t[l];let h=l*i,f=o*i;for(let m=0;m!==i;++m)e[f+m]=e[h+m]}++o}}if(r>0){t[o]=t[r];for(let l=r*i,a=o*i,c=0;c!==i;++c)e[a+c]=e[l+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Tc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function gf(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=da;var Yi=class extends Dn{constructor(t,e,i){super(t,e,i)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Er;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends Dn{constructor(t,e,i,s){super(t,e,i,s)}};Pa.prototype.ValueTypeName="color";var La=class extends Dn{constructor(t,e,i,s){super(t,e,i,s)}};La.prototype.ValueTypeName="number";var Da=class extends qi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,a=(i-e)/(s-e),c=t*l;for(let u=c+l;c!==u;c+=4)ci.slerpFlat(r,0,o,c-l,o,c,a);return r}},Hr=class extends Dn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Da(this.times,this.values,this.getValueSize(),t)}};Hr.prototype.ValueTypeName="quaternion";Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends Dn{constructor(t,e,i){super(t,e,i)}};$i.prototype.ValueTypeName="string";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=Er;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends Dn{constructor(t,e,i,s){super(t,e,i,s)}};Na.prototype.ValueTypeName="vector";var Ua=class{constructor(t,e,i){let s=this,r=!1,o=0,l=0,a,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){l++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,l),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,l),o===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),a?a(u):u},this.setURLModifier=function(u){return a=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},od=new Ua,Fa=class{constructor(t){this.manager=t!==void 0?t:od,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Fa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qo=new J,ta=new ci,ii=new J,Wr=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Qo,ta,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qo,ta,ii.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Qo,ta,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qo,ta,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zi=new J,xf=new fe,_f=new fe,pn=class extends Wr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=pa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pa*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zi.x,zi.y).multiplyScalar(-t/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-t/zi.z)}getViewSize(t,e){return this.getViewBounds(t,xf,_f),e.subVectors(_f,xf)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ia*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let a=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/a,e-=o.offsetY*i/c,s*=o.width/a,i*=o.height/c}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Xr=class extends Wr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,l=s+e,a=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,l-=u*this.view.offsetY,a=l-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Hs=-90,Ws=1,Oa=class extends yn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(Hs,Ws,t,e);s.layers=this.layers,this.add(s);let r=new pn(Hs,Ws,t,e);r.layers=this.layers,this.add(r);let o=new pn(Hs,Ws,t,e);o.layers=this.layers,this.add(o);let l=new pn(Hs,Ws,t,e);l.layers=this.layers,this.add(l);let a=new pn(Hs,Ws,t,e);a.layers=this.layers,this.add(a);let c=new pn(Hs,Ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,l,a]=e;for(let c of e)this.remove(c);if(t===$n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(t===Rr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,l,a,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Ba=class extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ah="\\[\\]\\.:\\/",Fm=new RegExp("["+ah+"]","g"),lh="[^"+ah+"]",Om="[^"+ah.replace("\\.","")+"]",Bm=/((?:WC+[\/:])*)/.source.replace("WC",lh),zm=/(WCOD+)?/.source.replace("WCOD",Om),km=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),Vm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),Gm=new RegExp("^"+Bm+zm+km+Vm+"$"),Hm=["material","materials","bones","map"],Dc=class{constructor(t,e,i){let s=i||Be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Be=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Fm,"")}static parseTrackName(t){let e=Gm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Hm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let l=r[o];if(l.name===e||l.uuid===e)return l;let a=i(l.children);if(a)return a}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){te("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;ne("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}a=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(a=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Be.Composite=Dc;Be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Be.prototype.GetterByBindingType=[Be.prototype._getValue_direct,Be.prototype._getValue_array,Be.prototype._getValue_arrayElement,Be.prototype._getValue_toArray];Be.prototype.SetterByBindingTypeAndVersioning=[[Be.prototype._setValue_direct,Be.prototype._setValue_direct_setNeedsUpdate,Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_array,Be.prototype._setValue_array_setNeedsUpdate,Be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_arrayElement,Be.prototype._setValue_arrayElement_setNeedsUpdate,Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_fromArray,Be.prototype._setValue_fromArray_setNeedsUpdate,Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ev=new Float32Array(1);var ph=class ph{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};ph.prototype.isMatrix2=!0;var Nc=ph;function ch(n,t,e,i){let s=Wm(i);switch(e){case th:return n*t;case nh:return n*t/s.components*s.byteLength;case qa:return n*t/s.components*s.byteLength;case Qi:return n*t*2/s.components*s.byteLength;case Ya:return n*t*2/s.components*s.byteLength;case eh:return n*t*3/s.components*s.byteLength;case kn:return n*t*4/s.components*s.byteLength;case $a:return n*t*4/s.components*s.byteLength;case Zr:case Jr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Kr:case jr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ja:case ja:return Math.max(n,16)*Math.max(t,8)/4;case Za:case Ka:return Math.max(n,8)*Math.max(t,8)/2;case Qa:case tl:case nl:case il:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case el:case Qr:case sl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case rl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ol:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case al:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ll:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case cl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case hl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ul:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case fl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case dl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case pl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ml:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case gl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case xl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case _l:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case yl:case vl:case Ml:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Sl:case bl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case to:case wl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wm(n){switch(n){case Nn:case Jc:return{byteLength:1,components:1};case tr:case Kc:case jn:return{byteLength:2,components:1};case Wa:case Xa:return{byteLength:2,components:4};case Jn:case Ha:case Kn:return{byteLength:4,components:1};case jc:case Qc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Rd(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function qm(n){let t=new WeakMap;function e(l,a){let c=l.array,u=l.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(a,f),n.bufferData(a,c,u),l.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:h}}function i(l,a,c){let u=a.array,h=a.updateRanges;if(n.bindBuffer(c,l),h.length===0)n.bufferSubData(c,0,u);else{h.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<h.length;m++){let _=h[f],v=h[m];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,h[f]=v)}h.length=f+1;for(let m=0,_=h.length;m<_;m++){let v=h[m];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}a.clearUpdateRanges()}a.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let a=t.get(l);a&&(n.deleteBuffer(a.buffer),t.delete(l))}function o(l,a){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let u=t.get(l);(!u||u.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let c=t.get(l);if(c===void 0)t.set(l,e(l,a));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,l,a),c.version=l.version}}return{get:s,remove:r,update:o}}var Ym=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$m=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Km=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,t0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,n0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,o0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,a0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,d0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,p0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,m0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,g0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,x0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b0="gl_FragColor = linearToOutputTexel( gl_FragColor );",w0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,E0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,A0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,T0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,R0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,I0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,U0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,z0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,k0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,X0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,q0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Y0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,J0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ig=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,og=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ag=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_g=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ng=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$g=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ex=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ox=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ax=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ux=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,px=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_x=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ex=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ax=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:Ym,alphahash_pars_fragment:$m,alphamap_fragment:Zm,alphamap_pars_fragment:Jm,alphatest_fragment:Km,alphatest_pars_fragment:jm,aomap_fragment:Qm,aomap_pars_fragment:t0,batching_pars_vertex:e0,batching_vertex:n0,begin_vertex:i0,beginnormal_vertex:s0,bsdfs:r0,iridescence_fragment:o0,bumpmap_pars_fragment:a0,clipping_planes_fragment:l0,clipping_planes_pars_fragment:c0,clipping_planes_pars_vertex:h0,clipping_planes_vertex:u0,color_fragment:f0,color_pars_fragment:d0,color_pars_vertex:p0,color_vertex:m0,common:g0,cube_uv_reflection_fragment:x0,defaultnormal_vertex:_0,displacementmap_pars_vertex:y0,displacementmap_vertex:v0,emissivemap_fragment:M0,emissivemap_pars_fragment:S0,colorspace_fragment:b0,colorspace_pars_fragment:w0,envmap_fragment:E0,envmap_common_pars_fragment:A0,envmap_pars_fragment:T0,envmap_pars_vertex:R0,envmap_physical_pars_fragment:z0,envmap_vertex:C0,fog_vertex:I0,fog_pars_vertex:P0,fog_fragment:L0,fog_pars_fragment:D0,gradientmap_pars_fragment:N0,lightmap_pars_fragment:U0,lights_lambert_fragment:F0,lights_lambert_pars_fragment:O0,lights_pars_begin:B0,lights_toon_fragment:k0,lights_toon_pars_fragment:V0,lights_phong_fragment:G0,lights_phong_pars_fragment:H0,lights_physical_fragment:W0,lights_physical_pars_fragment:X0,lights_fragment_begin:q0,lights_fragment_maps:Y0,lights_fragment_end:$0,lightprobes_pars_fragment:Z0,logdepthbuf_fragment:J0,logdepthbuf_pars_fragment:K0,logdepthbuf_pars_vertex:j0,logdepthbuf_vertex:Q0,map_fragment:tg,map_pars_fragment:eg,map_particle_fragment:ng,map_particle_pars_fragment:ig,metalnessmap_fragment:sg,metalnessmap_pars_fragment:rg,morphinstance_vertex:og,morphcolor_vertex:ag,morphnormal_vertex:lg,morphtarget_pars_vertex:cg,morphtarget_vertex:hg,normal_fragment_begin:ug,normal_fragment_maps:fg,normal_pars_fragment:dg,normal_pars_vertex:pg,normal_vertex:mg,normalmap_pars_fragment:gg,clearcoat_normal_fragment_begin:xg,clearcoat_normal_fragment_maps:_g,clearcoat_pars_fragment:yg,iridescence_pars_fragment:vg,opaque_fragment:Mg,packing:Sg,premultiplied_alpha_fragment:bg,project_vertex:wg,dithering_fragment:Eg,dithering_pars_fragment:Ag,roughnessmap_fragment:Tg,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Cg,shadowmap_pars_vertex:Ig,shadowmap_vertex:Pg,shadowmask_pars_fragment:Lg,skinbase_vertex:Dg,skinning_pars_vertex:Ng,skinning_vertex:Ug,skinnormal_vertex:Fg,specularmap_fragment:Og,specularmap_pars_fragment:Bg,tonemapping_fragment:zg,tonemapping_pars_fragment:kg,transmission_fragment:Vg,transmission_pars_fragment:Gg,uv_pars_fragment:Hg,uv_pars_vertex:Wg,uv_vertex:Xg,worldpos_vertex:qg,background_vert:Yg,background_frag:$g,backgroundCube_vert:Zg,backgroundCube_frag:Jg,cube_vert:Kg,cube_frag:jg,depth_vert:Qg,depth_frag:tx,distance_vert:ex,distance_frag:nx,equirect_vert:ix,equirect_frag:sx,linedashed_vert:rx,linedashed_frag:ox,meshbasic_vert:ax,meshbasic_frag:lx,meshlambert_vert:cx,meshlambert_frag:hx,meshmatcap_vert:ux,meshmatcap_frag:fx,meshnormal_vert:dx,meshnormal_frag:px,meshphong_vert:mx,meshphong_frag:gx,meshphysical_vert:xx,meshphysical_frag:_x,meshtoon_vert:yx,meshtoon_frag:vx,points_vert:Mx,points_frag:Sx,shadow_vert:bx,shadow_frag:wx,sprite_vert:Ex,sprite_frag:Ax},Dt={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},pi={basic:{uniforms:gn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:gn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ie(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:gn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:gn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:gn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new ie(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:gn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:gn([Dt.points,Dt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:gn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:gn([Dt.common,Dt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:gn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:gn([Dt.sprite,Dt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:gn([Dt.common,Dt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:gn([Dt.lights,Dt.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};pi.physical={uniforms:gn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var Tl={r:0,b:0,g:0},Tx=new ke,Cd=new oe;Cd.set(-1,0,0,0,1,0,0,0,1);function Rx(n,t,e,i,s,r){let o=new ie(0),l=s===!0?0:1,a,c,u=null,h=0,f=null;function m(T){let L=T.isScene===!0?T.background:null;if(L&&L.isTexture){let b=T.backgroundBlurriness>0;L=t.get(L,b)}return L}function _(T){let L=!1,b=m(T);b===null?p(o,l):b&&b.isColor&&(p(b,1),L=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(T,L){let b=m(L);b&&(b.isCubeTexture||b.mapping===Yr)?(c===void 0&&(c=new We(new vn(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:ms(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Tx.makeRotationFromEuler(L.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Cd),c.material.toneMapped=xe.getTransfer(b.colorSpace)!==Ce,(u!==b||h!==b.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,f=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(a===void 0&&(a=new We(new Gr(2,2),new mn({name:"BackgroundMaterial",uniforms:ms(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=b,a.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,a.material.toneMapped=xe.getTransfer(b.colorSpace)!==Ce,b.matrixAutoUpdate===!0&&b.updateMatrix(),a.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||f!==n.toneMapping)&&(a.material.needsUpdate=!0,u=b,h=b.version,f=n.toneMapping),a.layers.enableAll(),T.unshift(a,a.geometry,a.material,0,0,null))}function p(T,L){T.getRGB(Tl,oh(n)),e.buffers.color.setClear(Tl.r,Tl.g,Tl.b,L,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,L=1){o.set(T),l=L,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(o,l)},render:_,addToRenderList:v,dispose:x}}function Cx(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function l(N,X,U,P,k){let Z=!1,K=h(N,P,U,X);r!==K&&(r=K,c(r.object)),Z=m(N,P,U,k),Z&&_(N,P,U,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,b(N,X,U,P),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function a(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function u(N){return n.deleteVertexArray(N)}function h(N,X,U,P){let k=P.wireframe===!0,Z=i[X.id];Z===void 0&&(Z={},i[X.id]=Z);let K=N.isInstancedMesh===!0?N.id:0,st=Z[K];st===void 0&&(st={},Z[K]=st);let O=st[U.id];O===void 0&&(O={},st[U.id]=O);let ot=O[k];return ot===void 0&&(ot=f(a()),O[k]=ot),ot}function f(N){let X=[],U=[],P=[];for(let k=0;k<e;k++)X[k]=0,U[k]=0,P[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:U,attributeDivisors:P,object:N,attributes:{},index:null}}function m(N,X,U,P){let k=r.attributes,Z=X.attributes,K=0,st=U.getAttributes();for(let O in st)if(st[O].location>=0){let it=k[O],Mt=Z[O];if(Mt===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(Mt=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(Mt=N.instanceColor)),it===void 0||it.attribute!==Mt||Mt&&it.data!==Mt.data)return!0;K++}return r.attributesNum!==K||r.index!==P}function _(N,X,U,P){let k={},Z=X.attributes,K=0,st=U.getAttributes();for(let O in st)if(st[O].location>=0){let it=Z[O];it===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(it=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(it=N.instanceColor));let Mt={};Mt.attribute=it,it&&it.data&&(Mt.data=it.data),k[O]=Mt,K++}r.attributes=k,r.attributesNum=K,r.index=P}function v(){let N=r.newAttributes;for(let X=0,U=N.length;X<U;X++)N[X]=0}function p(N){x(N,0)}function x(N,X){let U=r.newAttributes,P=r.enabledAttributes,k=r.attributeDivisors;U[N]=1,P[N]===0&&(n.enableVertexAttribArray(N),P[N]=1),k[N]!==X&&(n.vertexAttribDivisor(N,X),k[N]=X)}function T(){let N=r.newAttributes,X=r.enabledAttributes;for(let U=0,P=X.length;U<P;U++)X[U]!==N[U]&&(n.disableVertexAttribArray(U),X[U]=0)}function L(N,X,U,P,k,Z,K){K===!0?n.vertexAttribIPointer(N,X,U,k,Z):n.vertexAttribPointer(N,X,U,P,k,Z)}function b(N,X,U,P){v();let k=P.attributes,Z=U.getAttributes(),K=X.defaultAttributeValues;for(let st in Z){let O=Z[st];if(O.location>=0){let ot=k[st];if(ot===void 0&&(st==="instanceMatrix"&&N.instanceMatrix&&(ot=N.instanceMatrix),st==="instanceColor"&&N.instanceColor&&(ot=N.instanceColor)),ot!==void 0){let it=ot.normalized,Mt=ot.itemSize,gt=t.get(ot);if(gt===void 0)continue;let vt=gt.buffer,bt=gt.type,_t=gt.bytesPerElement,$=bt===n.INT||bt===n.UNSIGNED_INT||ot.gpuType===Ha;if(ot.isInterleavedBufferAttribute){let nt=ot.data,xt=nt.stride,Lt=ot.offset;if(nt.isInstancedInterleavedBuffer){for(let ft=0;ft<O.locationSize;ft++)x(O.location+ft,nt.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let ft=0;ft<O.locationSize;ft++)p(O.location+ft);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let ft=0;ft<O.locationSize;ft++)L(O.location+ft,Mt/O.locationSize,bt,it,xt*_t,(Lt+Mt/O.locationSize*ft)*_t,$)}else{if(ot.isInstancedBufferAttribute){for(let nt=0;nt<O.locationSize;nt++)x(O.location+nt,ot.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let nt=0;nt<O.locationSize;nt++)p(O.location+nt);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let nt=0;nt<O.locationSize;nt++)L(O.location+nt,Mt/O.locationSize,bt,it,Mt*_t,Mt/O.locationSize*nt*_t,$)}}else if(K!==void 0){let it=K[st];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(O.location,it);break;case 3:n.vertexAttrib3fv(O.location,it);break;case 4:n.vertexAttrib4fv(O.location,it);break;default:n.vertexAttrib1fv(O.location,it)}}}}T()}function A(){w();for(let N in i){let X=i[N];for(let U in X){let P=X[U];for(let k in P){let Z=P[k];for(let K in Z)u(Z[K].object),delete Z[K];delete P[k]}}delete i[N]}}function E(N){if(i[N.id]===void 0)return;let X=i[N.id];for(let U in X){let P=X[U];for(let k in P){let Z=P[k];for(let K in Z)u(Z[K].object),delete Z[K];delete P[k]}}delete i[N.id]}function D(N){for(let X in i){let U=i[X];for(let P in U){let k=U[P];if(k[N.id]===void 0)continue;let Z=k[N.id];for(let K in Z)u(Z[K].object),delete Z[K];delete k[N.id]}}}function M(N){for(let X in i){let U=i[X],P=N.isInstancedMesh===!0?N.id:0,k=U[P];if(k!==void 0){for(let Z in k){let K=k[Z];for(let st in K)u(K[st].object),delete K[st];delete k[Z]}delete U[P],Object.keys(U).length===0&&delete i[X]}}}function w(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:w,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:p,disableUnusedAttributes:T}}function Ix(n,t,e){let i;function s(a){i=a}function r(a,c){n.drawArrays(i,a,c),e.update(c,i,1)}function o(a,c,u){u!==0&&(n.drawArraysInstanced(i,a,c,u),e.update(c,i,u))}function l(a,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,a,0,c,0,u);let f=0;for(let m=0;m<u;m++)f+=c[m];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function Px(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==kn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(D){let M=D===jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Nn&&D!==Kn&&!M&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function a(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=a(c);u!==c&&(te("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),L=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:a,textureFormatReadable:o,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:p,maxAttributes:x,maxVertexUniforms:T,maxVaryings:L,maxFragmentUniforms:b,maxSamples:A,samples:E}}function Lx(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Yn,l=new oe,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let m=h.length!==0||f||i!==0||s;return s=f,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,m){let _=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,x=n.get(h);if(!s||_===null||_.length===0||r&&!p)r?u(null):c();else{let T=r?0:i,L=T*4,b=x.clippingState||null;a.value=b,b=u(_,f,L,m);for(let A=0;A!==L;++A)b[A]=e[A];x.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){a.value!==e&&(a.value=e,a.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,m,_){let v=h!==null?h.length:0,p=null;if(v!==0){if(p=a.value,_!==!0||p===null){let x=m+v*4,T=f.matrixWorldInverse;l.getNormalMatrix(T),(p===null||p.length<x)&&(p=new Float32Array(x));for(let L=0,b=m;L!==v;++L,b+=4)o.copy(h[L]).applyMatrix4(T,l),o.normal.toArray(p,b),p[b+3]=o.constant}a.value=p,a.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}var ir=4,Dx=6,Nx=20,Ux=256,eo=new Xr,ad=new ie,mh=null,gh=0,xh=0,_h=!1,Fx=new J,gs=new J,Cl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:l=Fx}=r;mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,s,a,l),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(mh,gh,xh),this._renderer.xr.enabled=_h,t.scissorTest=!1,nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ji||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:je,minFilter:je,generateMipmaps:!1,type:jn,format:kn,colorSpace:Ar,depthBuffer:!1},s=ld(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ld(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ox(r)),this._blurMaterial=zx(r,t,e),this._ggxMaterial=Bx(r,t,e)}return s}_compileMaterial(t){let e=new We(new tn,t);this._renderer.compile(e,eo)}_sceneToCubeUV(t,e,i,s,r){let a=new pn(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(ad),h.toneMapping=Zn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new We(new vn,new Bn({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,p=v.material,x=!1,T=t.background;T?T.isColor&&(p.color.copy(T),t.background=null,x=!0):(p.color.copy(ad),x=!0);for(let L=0;L<6;L++){let b=L%3;b===0?(a.up.set(0,c[L],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x+u[L],r.y,r.z)):b===1?(a.up.set(0,0,c[L]),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y+u[L],r.z)):(a.up.set(0,c[L],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y,r.z+u[L]));let A=this._cubeSize;nr(s,b*A,L>2?A:0,A,A),h.setRenderTarget(s),x&&h.render(v,a),h.render(t,a)}h.toneMapping=m,h.autoClear=f,t.background=T}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ji||t.mapping===ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let l=r.uniforms;l.envMap.value=t;let a=this._cubeSize;nr(e,0,0,3*a,2*a),i.setRenderTarget(e),i.render(o,eo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[i];l.material=o;let a=o.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,m=h*f,{_lodMax:_}=this,v=this._sizeLods[i],p=3*v*(i>_-ir?i-_+ir:0),x=4*(this._cubeSize-v);a.envMap.value=t.texture,a.roughness.value=m,a.mipInt.value=_-e,nr(r,p,x,3*v,2*v),s.setRenderTarget(r),s.render(l,eo),a.envMap.value=r.texture,a.roughness.value=0,a.mipInt.value=_-i,nr(t,p,x,3*v,2*v),s.setRenderTarget(t),s.render(l,eo)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,l=this._blurMaterial,a=this._lodMeshes[s];a.material=l;let c=l.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-ir?s-this._lodMax+ir:0),f=4*(this._cubeSize-u);nr(e,h,f,3*u,2*u),o.setRenderTarget(e),o.render(a,eo)}};function Ox(n){let t=[],e=[],i=n,s=n-ir+1+Dx;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let l=1/(o-2),a=-l,c=1+l,u=[a,a,c,a,c,c,a,a,c,c,a,c],h=6,f=6,m=3,_=new Float32Array(m*f*h),v=new Float32Array(m*f*h);for(let x=0;x<h;x++){let T=x%3*2/3-1,L=x>2?0:-1,b=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];_.set(b,m*f*x);for(let A=0;A<f;A++){let E=u[A*2]*2-1,D=u[A*2+1]*2-1;x===0?gs.set(1,D,E):x===1?gs.set(-E,1,-D):x===2?gs.set(-E,D,1):x===3?gs.set(-1,D,-E):x===4?gs.set(-E,-1,D):gs.set(E,D,-1),gs.toArray(v,(x*f+A)*m)}}let p=new tn;p.setAttribute("position",new Ye(_,m)),p.setAttribute("outputDirection",new Ye(v,m)),e.push(new We(p,null)),i>ir&&i--}return{lodMeshes:e,sizeLods:t}}function ld(n,t,e){let i=new wn(n,t,e);return i.texture.mapping=Yr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Bx(n,t,e){return new mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ux,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ll(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function zx(n,t,e){return new mn({name:"SphericalGaussianBlur",defines:{SAMPLES:Nx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ll(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function cd(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function hd(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Ll(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Il=class extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new zr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new vn(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:fi});r.uniforms.tEquirect.value=e;let o=new We(s,r),l=e.minFilter;return e.minFilter===Ki&&(e.minFilter=je),new Oa(1,10,this).update(t,o),e.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function kx(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,m=!1){return f==null?null:m?o(f):r(f)}function r(f){if(f&&f.isTexture){let m=f.mapping;if(m===ka||m===Va)if(t.has(f)){let _=t.get(f).texture;return l(_,f.mapping)}else{let _=f.image;if(_&&_.height>0){let v=new Il(_.height);return v.fromEquirectangularTexture(n,f),t.set(f,v),f.addEventListener("dispose",c),l(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let m=f.mapping,_=m===ka||m===Va,v=m===Ji||m===ps;if(_||v){let p=e.get(f),x=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return i===null&&(i=new Cl(n)),p=_?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let T=f.image;return _&&T&&T.height>0||v&&T&&a(T)?(i===null&&(i=new Cl(n)),p=_?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function l(f,m){return m===ka?f.mapping=Ji:m===Va&&(f.mapping=ps),f}function a(f){let m=0,_=6;for(let v=0;v<_;v++)f[v]!==void 0&&m++;return m===_}function c(f){let m=f.target;m.removeEventListener("dispose",c);let _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function u(f){let m=f.target;m.removeEventListener("dispose",u);let _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function h(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Vx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&cs("WebGLRenderer: "+i+" extension not supported."),s}}}function Gx(n,t,e,i){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function l(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function a(h){let f=h.attributes;for(let m in f)t.update(f[m],n.ARRAY_BUFFER)}function c(h){let f=[],m=h.index,_=h.attributes.position,v=0;if(_===void 0)return;if(m!==null){let T=m.array;v=m.version;for(let L=0,b=T.length;L<b;L+=3){let A=T[L+0],E=T[L+1],D=T[L+2];f.push(A,E,E,D,D,A)}}else{let T=_.array;v=_.version;for(let L=0,b=T.length/3-1;L<b;L+=3){let A=L+0,E=L+1,D=L+2;f.push(A,E,E,D,D,A)}}let p=new(_.count>=65535?Ur:Nr)(f,1);p.version=v;let x=r.get(h);x&&t.remove(x),r.set(h,p)}function u(h){let f=r.get(h);if(f){let m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:l,update:a,getWireframeAttribute:u}}function Hx(n,t,e){let i;function s(h){i=h}let r,o;function l(h){r=h.type,o=h.bytesPerElement}function a(h,f){n.drawElements(i,f,r,h*o),e.update(f,i,1)}function c(h,f,m){m!==0&&(n.drawElementsInstanced(i,f,r,h*o,m),e.update(f,i,m))}function u(h,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,m);let v=0;for(let p=0;p<m;p++)v+=f[p];e.update(v,i,1)}this.setMode=s,this.setIndex=l,this.render=a,this.renderInstances=c,this.renderMultiDraw=u}function Wx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,l){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=l*(r/3);break;case n.LINES:e.lines+=l*(r/2);break;case n.LINE_STRIP:e.lines+=l*(r-1);break;case n.LINE_LOOP:e.lines+=l*r;break;case n.POINTS:e.points+=l*r;break;default:ne("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Xx(n,t,e){let i=new WeakMap,s=new He;function r(o,l,a){let c=o.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(l);if(f===void 0||f.count!==h){let w=function(){D.dispose(),i.delete(l),l.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let m=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,p=l.morphAttributes.position||[],x=l.morphAttributes.normal||[],T=l.morphAttributes.color||[],L=0;m===!0&&(L=1),_===!0&&(L=2),v===!0&&(L=3);let b=l.attributes.position.count*L,A=1;b>t.maxTextureSize&&(A=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let E=new Float32Array(b*A*4*h),D=new Pr(E,b,A,h);D.type=Kn,D.needsUpdate=!0;let M=L*4;for(let C=0;C<h;C++){let N=p[C],X=x[C],U=T[C],P=b*A*4*C;for(let k=0;k<N.count;k++){let Z=k*M;m===!0&&(s.fromBufferAttribute(N,k),E[P+Z+0]=s.x,E[P+Z+1]=s.y,E[P+Z+2]=s.z,E[P+Z+3]=0),_===!0&&(s.fromBufferAttribute(X,k),E[P+Z+4]=s.x,E[P+Z+5]=s.y,E[P+Z+6]=s.z,E[P+Z+7]=0),v===!0&&(s.fromBufferAttribute(U,k),E[P+Z+8]=s.x,E[P+Z+9]=s.y,E[P+Z+10]=s.z,E[P+Z+11]=U.itemSize===4?s.w:1)}}f={count:h,texture:D,size:new fe(b,A)},i.set(l,f),l.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)a.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];let _=l.morphTargetsRelative?1:1-m;a.getUniforms().setValue(n,"morphTargetBaseInfluence",_),a.getUniforms().setValue(n,"morphTargetInfluences",c)}a.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),a.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function qx(n,t,e,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return f}function l(){r=new WeakMap}function a(c){let u=c.target;u.removeEventListener("dispose",a),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:l}}var Yx={[Gc]:"LINEAR_TONE_MAPPING",[Hc]:"REINHARD_TONE_MAPPING",[Wc]:"CINEON_TONE_MAPPING",[Xc]:"ACES_FILMIC_TONE_MAPPING",[Yc]:"AGX_TONE_MAPPING",[$c]:"NEUTRAL_TONE_MAPPING",[qc]:"CUSTOM_TONE_MAPPING"};function $x(n,t,e,i,s,r){let o=new wn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,a=null,c=new tn;c.setAttribute("position",new _n([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new _n([0,2,0,0,2,0],2));let u=new wa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new We(c,u),f=new Xr(-1,1,1,-1,0,1),m=null,_=null,v=!1,p,x=null,T=[],L=!1;this.setSize=function(b,A){o.setSize(b,A),l!==null&&l.setSize(b,A),a!==null&&a.setSize(b,A);for(let E=0;E<T.length;E++){let D=T[E];D.setSize&&D.setSize(b,A)}},this.setEffects=function(b){T=b,L=T.length>0&&T[0].isRenderPass===!0;let A=o.width,E=o.height;T.length>0&&l===null&&(l=new wn(A,E,{type:jn,depthBuffer:!1,stencilBuffer:!1}),a=new wn(A,E,{type:jn,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<T.length;D++){let M=T[D];M.setSize&&M.setSize(A,E)}},this.begin=function(b,A){if(v||b.toneMapping===Zn&&T.length===0)return!1;if(x=A,A!==null){let E=A.width,D=A.height;(o.width!==E||o.height!==D)&&this.setSize(E,D)}return L===!1&&b.setRenderTarget(o),p=b.toneMapping,b.toneMapping=Zn,!0},this.hasRenderPass=function(){return L},this.end=function(b,A){b.toneMapping=p,v=!0;let E=o,D=l;for(let M=0;M<T.length;M++){let w=T[M];w.enabled!==!1&&(w.render(b,D,E,A),w.needsSwap!==!1&&(E=D,D=D===l?a:l))}if(m!==b.outputColorSpace||_!==b.toneMapping){m=b.outputColorSpace,_=b.toneMapping,u.defines={},xe.getTransfer(m)===Ce&&(u.defines.SRGB_TRANSFER="");let M=Yx[_];M&&(u.defines[M]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,b.setRenderTarget(x),b.render(h,f),x=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),a!==null&&a.dispose(),c.dispose(),u.dispose()}}var Id=new cn,Mh=new Xi(1,1),Pd=new Pr,Ld=new xa,Dd=new zr,ud=[],fd=[],dd=new Float32Array(16),pd=new Float32Array(9),md=new Float32Array(4);function rr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=ud[s];if(r===void 0&&(r=new Float32Array(s),ud[s]=r),t!==0){i.toArray(r,0);for(let o=1,l=0;o!==t;++o)l+=e,n[o].toArray(r,l)}return r}function en(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function nn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Dl(n,t){let e=fd[t];e===void 0&&(e=new Int32Array(t),fd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Zx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Jx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2fv(this.addr,t),nn(e,t)}}function Kx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;n.uniform3fv(this.addr,t),nn(e,t)}}function jx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4fv(this.addr,t),nn(e,t)}}function Qx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;md.set(i),n.uniformMatrix2fv(this.addr,!1,md),nn(e,i)}}function t_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;pd.set(i),n.uniformMatrix3fv(this.addr,!1,pd),nn(e,i)}}function e_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;dd.set(i),n.uniformMatrix4fv(this.addr,!1,dd),nn(e,i)}}function n_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function i_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2iv(this.addr,t),nn(e,t)}}function s_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;n.uniform3iv(this.addr,t),nn(e,t)}}function r_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4iv(this.addr,t),nn(e,t)}}function o_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function a_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2uiv(this.addr,t),nn(e,t)}}function l_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;n.uniform3uiv(this.addr,t),nn(e,t)}}function c_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4uiv(this.addr,t),nn(e,t)}}function h_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Mh.compareFunction=e.isReversedDepthBuffer()?Al:El,r=Mh):r=Id,e.setTexture2D(t||r,s)}function u_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ld,s)}function f_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Dd,s)}function d_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Pd,s)}function p_(n){switch(n){case 5126:return Zx;case 35664:return Jx;case 35665:return Kx;case 35666:return jx;case 35674:return Qx;case 35675:return t_;case 35676:return e_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return s_;case 35669:case 35673:return r_;case 5125:return o_;case 36294:return a_;case 36295:return l_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return d_}}function m_(n,t){n.uniform1fv(this.addr,t)}function g_(n,t){let e=rr(t,this.size,2);n.uniform2fv(this.addr,e)}function x_(n,t){let e=rr(t,this.size,3);n.uniform3fv(this.addr,e)}function __(n,t){let e=rr(t,this.size,4);n.uniform4fv(this.addr,e)}function y_(n,t){let e=rr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function v_(n,t){let e=rr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function M_(n,t){let e=rr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function S_(n,t){n.uniform1iv(this.addr,t)}function b_(n,t){n.uniform2iv(this.addr,t)}function w_(n,t){n.uniform3iv(this.addr,t)}function E_(n,t){n.uniform4iv(this.addr,t)}function A_(n,t){n.uniform1uiv(this.addr,t)}function T_(n,t){n.uniform2uiv(this.addr,t)}function R_(n,t){n.uniform3uiv(this.addr,t)}function C_(n,t){n.uniform4uiv(this.addr,t)}function I_(n,t,e){let i=this.cache,s=t.length,r=Dl(e,s);en(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Mh:o=Id;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||o,r[l])}function P_(n,t,e){let i=this.cache,s=t.length,r=Dl(e,s);en(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ld,r[o])}function L_(n,t,e){let i=this.cache,s=t.length,r=Dl(e,s);en(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Dd,r[o])}function D_(n,t,e){let i=this.cache,s=t.length,r=Dl(e,s);en(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Pd,r[o])}function N_(n){switch(n){case 5126:return m_;case 35664:return g_;case 35665:return x_;case 35666:return __;case 35674:return y_;case 35675:return v_;case 35676:return M_;case 5124:case 35670:return S_;case 35667:case 35671:return b_;case 35668:case 35672:return w_;case 35669:case 35673:return E_;case 5125:return A_;case 36294:return T_;case 36295:return R_;case 36296:return C_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return P_;case 35680:case 36300:case 36308:case 36293:return L_;case 36289:case 36303:case 36311:case 36292:return D_}}var Sh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=p_(e.type)}},bh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=N_(e.type)}},wh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let l=s[r];l.setValue(t,e[l.id],i)}}},yh=/(\w+)(\])?(\[|\.)?/g;function gd(n,t){n.seq.push(t),n.map[t.id]=t}function U_(n,t,e){let i=n.name,s=i.length;for(yh.lastIndex=0;;){let r=yh.exec(i),o=yh.lastIndex,l=r[1],a=r[2]==="]",c=r[3];if(a&&(l=l|0),c===void 0||c==="["&&o+2===s){gd(e,c===void 0?new Sh(l,n,t):new bh(l,n,t));break}else{let h=e.map[l];h===void 0&&(h=new wh(l),gd(e,h)),e=h}}}var sr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let l=t.getActiveUniform(e,o),a=t.getUniformLocation(e,l.name);U_(l,a,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let l=e[r],a=i[l.id];a.needsUpdate!==!1&&l.setValue(t,a.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function xd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var F_=37297,O_=0;function B_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let l=o+1;i.push(`${l===t?">":" "} ${l}: ${e[o]}`)}return i.join(`
`)}var _d=new oe;function z_(n){xe._getMatrix(_d,xe.workingColorSpace,n);let t=`mat3( ${_d.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(n)){case Tr:return[t,"LinearTransferOETF"];case Ce:return[t,"sRGBTransferOETF"];default:return te("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function yd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let l=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+B_(n.getShaderSource(t),l)}else return r}function k_(n,t){let e=z_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var V_={[Gc]:"Linear",[Hc]:"Reinhard",[Wc]:"Cineon",[Xc]:"ACESFilmic",[Yc]:"AgX",[$c]:"Neutral",[qc]:"Custom"};function G_(n,t){let e=V_[t];return e===void 0?(te("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Rl=new J;function H_(){xe.getLuminanceCoefficients(Rl);let n=Rl.x.toFixed(4),t=Rl.y.toFixed(4),e=Rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(io).join(`
`)}function X_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function q_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,l=1;r.type===n.FLOAT_MAT2&&(l=2),r.type===n.FLOAT_MAT3&&(l=3),r.type===n.FLOAT_MAT4&&(l=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:l}}return e}function io(n){return n!==""}function vd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Md(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(n){return n.replace(Y_,Z_)}var $_=new Map;function Z_(n,t){let e=he[t];if(e===void 0){let i=$_.get(t);if(i!==void 0)e=he[i],te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Eh(e)}var J_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sd(n){return n.replace(J_,K_)}function K_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var j_={[qr]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function Q_(n){return j_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ty={[Ji]:"ENVMAP_TYPE_CUBE",[ps]:"ENVMAP_TYPE_CUBE",[Yr]:"ENVMAP_TYPE_CUBE_UV"};function ey(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":ty[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var ny={[ps]:"ENVMAP_MODE_REFRACTION"};function iy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ny[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var sy={[Vc]:"ENVMAP_BLENDING_MULTIPLY",[kf]:"ENVMAP_BLENDING_MIX",[Vf]:"ENVMAP_BLENDING_ADD"};function ry(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":sy[n.combine]||"ENVMAP_BLENDING_NONE"}function oy(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ay(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,l=e.fragmentShader,a=Q_(e),c=ey(e),u=iy(e),h=ry(e),f=oy(e),m=W_(e),_=X_(r),v=s.createProgram(),p,x,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(io).join(`
`),p.length>0&&(p+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(io).join(`
`),x.length>0&&(x+=`
`)):(p=[bd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),x=[bd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?he.tonemapping_pars_fragment:"",e.toneMapping!==Zn?G_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,k_("linearToOutputTexel",e.outputColorSpace),H_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(io).join(`
`)),o=Eh(o),o=vd(o,e),o=Md(o,e),l=Eh(l),l=vd(l,e),l=Md(l,e),o=Sd(o),l=Sd(l),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["#define varying in",e.glslVersion===rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let L=T+p+o,b=T+x+l,A=xd(s,s.VERTEX_SHADER,L),E=xd(s,s.FRAGMENT_SHADER,b);s.attachShader(v,A),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function D(N){if(n.debug.checkShaderErrors){let X=s.getProgramInfoLog(v)||"",U=s.getShaderInfoLog(A)||"",P=s.getShaderInfoLog(E)||"",k=X.trim(),Z=U.trim(),K=P.trim(),st=!0,O=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(st=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,A,E);else{let ot=yd(s,A,"vertex"),it=yd(s,E,"fragment");ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+ot+`
`+it)}else k!==""?te("WebGLProgram: Program Info Log:",k):(Z===""||K==="")&&(O=!1);O&&(N.diagnostics={runnable:st,programLog:k,vertexShader:{log:Z,prefix:p},fragmentShader:{log:K,prefix:x}})}s.deleteShader(A),s.deleteShader(E),M=new sr(s,v),w=q_(s,v)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(v,F_)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=O_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=E,this}var ly=0,Ah=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Th(t),e.set(t,i)),i}},Th=class{constructor(t){this.id=ly++,this.code=t,this.usedTimes=0}};function cy(n){return n===Qi||n===Qr||n===to}function hy(n,t,e,i,s,r){let o=new Lr,l=new Ah,a=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return a.add(M),M===0?"uv":`uv${M}`}function v(M,w,C,N,X,U){let P=N.fog,k=X.geometry,Z=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,K=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,st=t.get(M.envMap||Z,K),O=st&&st.mapping===Yr?st.image.height:null,ot=m[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&te("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let it=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Mt=it!==void 0?it.length:0,gt=0;k.morphAttributes.position!==void 0&&(gt=1),k.morphAttributes.normal!==void 0&&(gt=2),k.morphAttributes.color!==void 0&&(gt=3);let vt,bt,_t,$;if(ot){let Ie=pi[ot];vt=Ie.vertexShader,bt=Ie.fragmentShader}else{vt=M.vertexShader,bt=M.fragmentShader;let Ie=l.getVertexShaderStage(M),be=l.getFragmentShaderStage(M);l.update(M,Ie,be),_t=Ie.id,$=be.id}let nt=n.getRenderTarget(),xt=n.state.buffers.depth.getReversed(),Lt=X.isInstancedMesh===!0,ft=X.isBatchedMesh===!0,Ft=!!M.map,jt=!!M.matcap,Ht=!!st,Zt=!!M.aoMap,ae=!!M.lightMap,Wt=!!M.bumpMap&&M.wireframe===!1,ee=!!M.normalMap,Se=!!M.displacementMap,Xe=!!M.emissiveMap,Ee=!!M.metalnessMap,Le=!!M.roughnessMap,H=M.anisotropy>0,Fe=M.clearcoat>0,_e=M.dispersion>0,I=M.retroreflectivity>0,y=M.iridescence>0,Y=M.sheen>0,j=M.transmission>0,at=H&&!!M.anisotropyMap,St=Fe&&!!M.clearcoatMap,Et=Fe&&!!M.clearcoatNormalMap,ct=Fe&&!!M.clearcoatRoughnessMap,ht=y&&!!M.iridescenceMap,Tt=y&&!!M.iridescenceThicknessMap,qt=Y&&!!M.sheenColorMap,Pt=Y&&!!M.sheenRoughnessMap,Rt=!!M.specularMap,Xt=!!M.specularColorMap,Jt=!!M.specularIntensityMap,se=j&&!!M.transmissionMap,V=j&&!!M.thicknessMap,At=!!M.gradientMap,q=!!M.alphaMap,lt=M.alphaTest>0,Nt=!!M.alphaHash,ut=!!M.extensions,Yt=Zn;M.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Yt=n.toneMapping);let zt={shaderID:ot,shaderType:M.type,shaderName:M.name,vertexShader:vt,fragmentShader:bt,defines:M.defines,customVertexShaderID:_t,customFragmentShaderID:$,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:ft,batchingColor:ft&&X._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&X.instanceColor!==null,instancingMorph:Lt&&X.morphTexture!==null,outputColorSpace:nt===null?n.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:xe.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Ft,matcap:jt,envMap:Ht,envMapMode:Ht&&st.mapping,envMapCubeUVHeight:O,aoMap:Zt,lightMap:ae,bumpMap:Wt,normalMap:ee,displacementMap:Se,emissiveMap:Xe,normalMapObjectSpace:ee&&M.normalMapType===Wf,normalMapTangentSpace:ee&&M.normalMapType===ih,packedNormalMap:ee&&M.normalMapType===ih&&cy(M.normalMap.format),metalnessMap:Ee,roughnessMap:Le,anisotropy:H,anisotropyMap:at,clearcoat:Fe,clearcoatMap:St,clearcoatNormalMap:Et,clearcoatRoughnessMap:ct,dispersion:_e,retroreflection:I,iridescence:y,iridescenceMap:ht,iridescenceThicknessMap:Tt,sheen:Y,sheenColorMap:qt,sheenRoughnessMap:Pt,specularMap:Rt,specularColorMap:Xt,specularIntensityMap:Jt,transmission:j,transmissionMap:se,thicknessMap:V,gradientMap:At,opaque:M.transparent===!1&&M.blending===Qs&&M.alphaToCoverage===!1,alphaMap:q,alphaTest:lt,alphaHash:Nt,combine:M.combine,mapUv:Ft&&_(M.map.channel),aoMapUv:Zt&&_(M.aoMap.channel),lightMapUv:ae&&_(M.lightMap.channel),bumpMapUv:Wt&&_(M.bumpMap.channel),normalMapUv:ee&&_(M.normalMap.channel),displacementMapUv:Se&&_(M.displacementMap.channel),emissiveMapUv:Xe&&_(M.emissiveMap.channel),metalnessMapUv:Ee&&_(M.metalnessMap.channel),roughnessMapUv:Le&&_(M.roughnessMap.channel),anisotropyMapUv:at&&_(M.anisotropyMap.channel),clearcoatMapUv:St&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Et&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&_(M.sheenRoughnessMap.channel),specularMapUv:Rt&&_(M.specularMap.channel),specularColorMapUv:Xt&&_(M.specularColorMap.channel),specularIntensityMapUv:Jt&&_(M.specularIntensityMap.channel),transmissionMapUv:se&&_(M.transmissionMap.channel),thicknessMapUv:V&&_(M.thicknessMap.channel),alphaMapUv:q&&_(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ee||H),vertexNormals:!!k.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!k.attributes.uv&&(Ft||q),fog:!!P,useFog:M.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||k.attributes.normal===void 0&&ee===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:xt,skinning:X.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:gt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Yt,decodeVideoTexture:Ft&&M.map.isVideoTexture===!0&&xe.getTransfer(M.map.colorSpace)===Ce,decodeVideoTextureEmissive:Xe&&M.emissiveMap.isVideoTexture===!0&&xe.getTransfer(M.emissiveMap.colorSpace)===Ce,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===zn,flipSided:M.side===Mn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ut&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&M.extensions.multiDraw===!0||ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return zt.vertexUv1s=a.has(1),zt.vertexUv2s=a.has(2),zt.vertexUv3s=a.has(3),a.clear(),zt}function p(M){let w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)w.push(C),w.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(x(w,M),T(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function x(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numSunLights),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numSunLightShadows),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function T(M,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function L(M){let w=m[M.type],C;if(w){let N=pi[w];C=sd.clone(N.uniforms)}else C=M.uniforms;return C}function b(M,w){let C=u.get(w);return C!==void 0?++C.usedTimes:(C=new ay(n,w,M,s),c.push(C),u.set(w,C)),C}function A(M){if(--M.usedTimes===0){let w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),u.delete(M.cacheKey),M.destroy()}}function E(M){l.remove(M)}function D(){l.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:L,acquireProgram:b,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:D}}function uy(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let l=n.get(o);return l===void 0&&(l={},n.set(o,l)),l}function i(o){n.delete(o)}function s(o,l,a){n.get(o)[l]=a}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function fy(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function wd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ed(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function l(f,m,_,v,p,x){let T=n[t];return T===void 0?(T={id:f.id,object:f,geometry:m,material:_,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:p,group:x},n[t]=T):(T.id=f.id,T.object=f,T.geometry=m,T.material=_,T.materialVariant=o(f),T.groupOrder=v,T.renderOrder=f.renderOrder,T.z=p,T.group=x),t++,T}function a(f,m,_,v,p,x,T){T.reversedDepth===!0&&(p=-p);let L=l(f,m,_,v,p,x);_.transmission>0?i.push(L):_.transparent===!0?s.push(L):e.push(L)}function c(f,m,_,v,p,x){let T=l(f,m,_,v,p,x);_.transmission>0?i.unshift(T):_.transparent===!0?s.unshift(T):e.unshift(T)}function u(f,m){e.length>1&&e.sort(f||fy),i.length>1&&i.sort(m||wd),s.length>1&&s.sort(m||wd)}function h(){for(let f=t,m=n.length;f<m;f++){let _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:u}}function dy(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Ed,n.set(i,[o])):s>=r.length?(o=new Ed,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function py(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new J,color:new ie};break;case"SpotLight":e={position:new J,direction:new J,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new J,halfWidth:new J,halfHeight:new J};break}return n[t.id]=e,e}}}function my(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var gy=0;function xy(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function _y(n){let t=new py,e=my(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);let s=new J,r=new ke,o=new ke;function l(c){let u=0,h=0,f=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let m=0,_=0,v=0,p=0,x=0,T=0,L=0,b=0,A=0,E=0,D=0,M=0,w=0,C=0;c.sort(xy);for(let X=0,U=c.length;X<U;X++){let P=c[X],k=P.color,Z=P.intensity,K=P.distance,st=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Qi?st=P.shadow.map.texture:st=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=k.r*Z,h+=k.g*Z,f+=k.b*Z;else if(P.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(P.sh.coefficients[O],Z);C++}else if(P.isSunLight){let O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ot=P.shadow,it=e.get(P);it.shadowIntensity=ot.intensity,it.shadowBias=ot.bias,it.shadowNormalBias=ot.normalBias,it.shadowRadius=ot.radius,it.shadowMapSize.copy(ot.mapSize).multiply(ot.getFrameExtents()),i.sunShadow[_]=it,i.sunShadowMap[_]=st;let Mt=ot.getViewportCount();for(let gt=0;gt<Mt;gt++)i.sunShadowMatrix[v+gt]=ot.getMatrix(gt),i.sunShadowCascade[v+gt]=ot._cascadeData[gt];v+=Mt,_++}i.sun[m]=O,m++}else if(P.isDirectionalLight){let O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ot=P.shadow,it=e.get(P);it.shadowIntensity=ot.intensity,it.shadowBias=ot.bias,it.shadowNormalBias=ot.normalBias,it.shadowRadius=ot.radius,it.shadowMapSize=ot.mapSize,i.directionalShadow[p]=it,i.directionalShadowMap[p]=st,i.directionalShadowMatrix[p]=P.shadow.matrix,A++}i.directional[p]=O,p++}else if(P.isSpotLight){let O=t.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(k).multiplyScalar(Z),O.distance=K,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,i.spot[T]=O;let ot=P.shadow;if(P.map&&(i.spotLightMap[M]=P.map,M++,ot.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[T]=ot.matrix,P.castShadow){let it=e.get(P);it.shadowIntensity=ot.intensity,it.shadowBias=ot.bias,it.shadowNormalBias=ot.normalBias,it.shadowRadius=ot.radius,it.shadowMapSize=ot.mapSize,i.spotShadow[T]=it,i.spotShadowMap[T]=st,D++}T++}else if(P.isRectAreaLight){let O=t.get(P);O.color.copy(k).multiplyScalar(Z),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),i.rectArea[L]=O,L++}else if(P.isPointLight){let O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){let ot=P.shadow,it=e.get(P);it.shadowIntensity=ot.intensity,it.shadowBias=ot.bias,it.shadowNormalBias=ot.normalBias,it.shadowRadius=ot.radius,it.shadowMapSize=ot.mapSize,it.shadowCameraNear=ot.camera.near,it.shadowCameraFar=ot.camera.far,i.pointShadow[x]=it,i.pointShadowMap[x]=st,i.pointShadowMatrix[x]=P.shadow.matrix,E++}i.point[x]=O,x++}else if(P.isHemisphereLight){let O=t.get(P);O.skyColor.copy(P.color).multiplyScalar(Z),O.groundColor.copy(P.groundColor).multiplyScalar(Z),i.hemi[b]=O,b++}}L>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Dt.LTC_FLOAT_1,i.rectAreaLTC2=Dt.LTC_FLOAT_2):(i.rectAreaLTC1=Dt.LTC_HALF_1,i.rectAreaLTC2=Dt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let N=i.hash;(N.sunLength!==m||N.directionalLength!==p||N.pointLength!==x||N.spotLength!==T||N.rectAreaLength!==L||N.hemiLength!==b||N.numSunShadows!==_||N.numDirectionalShadows!==A||N.numPointShadows!==E||N.numSpotShadows!==D||N.numSpotMaps!==M||N.numLightProbes!==C)&&(i.sun.length=m,i.directional.length=p,i.spot.length=T,i.rectArea.length=L,i.point.length=x,i.hemi.length=b,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=D,i.spotShadowMap.length=D,i.spotLightMatrix.length=D+M-w,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,N.sunLength=m,N.directionalLength=p,N.pointLength=x,N.spotLength=T,N.rectAreaLength=L,N.hemiLength=b,N.numSunShadows=_,N.numDirectionalShadows=A,N.numPointShadows=E,N.numSpotShadows=D,N.numSpotMaps=M,N.numLightProbes=C,i.version=gy++)}function a(c,u){let h=0,f=0,m=0,_=0,v=0,p=0,x=u.matrixWorldInverse;for(let T=0,L=c.length;T<L;T++){let b=c[T];if(b.isSunLight){let A=i.sun[h];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(x),h++}else if(b.isDirectionalLight){let A=i.directional[f];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(x),f++}else if(b.isSpotLight){let A=i.spot[_];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(x),_++}else if(b.isRectAreaLight){let A=i.rectArea[v];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(x),o.identity(),r.copy(b.matrixWorld),r.premultiply(x),o.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){let A=i.point[m];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(x),m++}else if(b.isHemisphereLight){let A=i.hemi[p];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(x),p++}}}return{setup:l,setupView:a,state:i}}function Ad(n){let t=new _y(n),e=[],i=[],s=[];function r(f){h.camera=f,e.length=0,i.length=0,s.length=0}function o(f){e.push(f)}function l(f){i.push(f)}function a(f){s.push(f)}function c(){t.setup(e)}function u(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:l,pushLightProbeGrid:a}}function yy(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),l;return o===void 0?(l=new Ad(n),t.set(s,[l])):r>=o.length?(l=new Ad(n),o.push(l)):l=o[r],l}function i(){t=new WeakMap}return{get:e,dispose:i}}var vy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,My=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Sy=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],by=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Td=new ke,no=new J,vh=new J;function wy(n,t,e){let i=new Or,s=new fe,r=new fe,o=new He,l=new Ea,a=new Aa,c={},u=e.maxTextureSize,h={[Zi]:Mn,[Mn]:Zi,[zn]:zn},f=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:vy,fragmentShader:My}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let _=new tn;_.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new We(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qr;let x=this.type;this.render=function(E,D,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Mf&&(te("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qr);let w=n.getRenderTarget(),C=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),X=n.state;X.setBlending(fi),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let U=x!==this.type;U&&D.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(k=>k.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,k=E.length;P<k;P++){let Z=E[P],K=Z.shadow;if(K===void 0){te("WebGLShadowMap:",Z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let st=K.getFrameExtents();s.multiply(st),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/st.x),s.x=r.x*st.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/st.y),s.y=r.y*st.y,K.mapSize.y=r.y));let O=n.state.buffers.depth.getReversed();if(K.camera._reversedDepth=O,K.map===null||U===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===js){if(Z.isPointLight){te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new wn(s.x,s.y,{format:Qi,type:jn,minFilter:je,magFilter:je,generateMipmaps:!1}),K.map.texture.name=Z.name+".shadowMap",K.map.depthTexture=new Xi(s.x,s.y,Kn),K.map.depthTexture.name=Z.name+".shadowMapDepth",K.map.depthTexture.format=ai,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=an,K.map.depthTexture.magFilter=an}else Z.isPointLight?(K.map=new Il(s.x),K.map.depthTexture=new ba(s.x,Jn)):(K.map=new wn(s.x,s.y),K.map.depthTexture=new Xi(s.x,s.y,Jn)),K.map.depthTexture.name=Z.name+".shadowMap",K.map.depthTexture.format=ai,this.type===qr?(K.map.depthTexture.compareFunction=O?Al:El,K.map.depthTexture.minFilter=je,K.map.depthTexture.magFilter=je):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=an,K.map.depthTexture.magFilter=an);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);let ot=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();Z.isPointLight!==!0&&K.updateMatrices(Z,M);for(let it=0;it<ot;it++){let Mt=K.getCamera(it);if(Z.isPointLight){let gt=K.camera,vt=K.matrix,bt=Z.distance||gt.far;bt!==gt.far&&(gt.far=bt,gt.updateProjectionMatrix()),no.setFromMatrixPosition(Z.matrixWorld),gt.position.copy(no),vh.copy(gt.position),vh.add(Sy[it]),gt.up.copy(by[it]),gt.lookAt(vh),gt.updateMatrixWorld(),vt.makeTranslation(-no.x,-no.y,-no.z),Td.multiplyMatrices(gt.projectionMatrix,gt.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Td,gt.coordinateSystem,gt.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)n.setRenderTarget(K.map,it),n.clear();else{it===0&&(n.setRenderTarget(K.map),n.clear());let gt=K.getViewport(it);o.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),X.viewport(o)}i=K.getFrustum(it),b(D,M,Mt,Z,this.type)}K.isPointLightShadow!==!0&&this.type===js&&T(K,M),K.needsUpdate=!1}x=this.type,p.needsUpdate=!1,n.setRenderTarget(w,C,N)};function T(E,D){let M=t.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null?E.mapPass=new wn(s.x,s.y,{format:Qi,type:jn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(D,null,M,f,v,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value.set(E.map.width,E.map.height),m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(D,null,M,m,v,null)}function L(E,D,M,w){let C=null,N=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)C=N;else if(C=M.isPointLight===!0?a:l,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let X=C.uuid,U=D.uuid,P=c[X];P===void 0&&(P={},c[X]=P);let k=P[U];k===void 0&&(k=C.clone(),P[U]=k,D.addEventListener("dispose",A)),C=k}if(C.visible=D.visible,C.wireframe=D.wireframe,w===js?C.side=D.shadowSide!==null?D.shadowSide:D.side:C.side=D.shadowSide!==null?D.shadowSide:h[D.side],C.alphaMap=D.alphaMap,C.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,C.map=D.map,C.clipShadows=D.clipShadows,C.clippingPlanes=D.clippingPlanes,C.clipIntersection=D.clipIntersection,C.displacementMap=D.displacementMap,C.displacementScale=D.displacementScale,C.displacementBias=D.displacementBias,C.wireframeLinewidth=D.wireframeLinewidth,C.linewidth=D.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let X=n.properties.get(C);X.light=M}return C}function b(E,D,M,w,C){if(E.visible===!1)return;if(E.layers.test(D.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===js)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let U=t.update(E),P=E.material;if(Array.isArray(P)){let k=U.groups;for(let Z=0,K=k.length;Z<K;Z++){let st=k[Z],O=P[st.materialIndex];if(O&&O.visible){let ot=L(E,O,w,C);E.onBeforeShadow(n,E,D,M,U,ot,st),n.renderBufferDirect(M,null,U,ot,E,st),E.onAfterShadow(n,E,D,M,U,ot,st)}}}else if(P.visible){let k=L(E,P,w,C);E.onBeforeShadow(n,E,D,M,U,k,null),n.renderBufferDirect(M,null,U,k,E,null),E.onAfterShadow(n,E,D,M,U,k,null)}}let X=E.children;for(let U=0,P=X.length;U<P;U++)b(X[U],D,M,w,C)}function A(E){E.target.removeEventListener("dispose",A);for(let M in c){let w=c[M],C=E.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function Ey(n,t){function e(){let V=!1,At=new He,q=null,lt=new He(0,0,0,0);return{setMask:function(Nt){q!==Nt&&!V&&(n.colorMask(Nt,Nt,Nt,Nt),q=Nt)},setLocked:function(Nt){V=Nt},setClear:function(Nt,ut,Yt,zt,Ie){Ie===!0&&(Nt*=zt,ut*=zt,Yt*=zt),At.set(Nt,ut,Yt,zt),lt.equals(At)===!1&&(n.clearColor(Nt,ut,Yt,zt),lt.copy(At))},reset:function(){V=!1,q=null,lt.set(-1,0,0,0)}}}function i(){let V=!1,At=!1,q=null,lt=null,Nt=null;return{setReversed:function(ut){if(At!==ut){let Yt=t.get("EXT_clip_control");ut?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),At=ut;let zt=Nt;Nt=null,this.setClear(zt)}},getReversed:function(){return At},setTest:function(ut){ut?nt(n.DEPTH_TEST):xt(n.DEPTH_TEST)},setMask:function(ut){q!==ut&&!V&&(n.depthMask(ut),q=ut)},setFunc:function(ut){if(At&&(ut=ed[ut]),lt!==ut){switch(ut){case sa:n.depthFunc(n.NEVER);break;case ra:n.depthFunc(n.ALWAYS);break;case oa:n.depthFunc(n.LESS);break;case qs:n.depthFunc(n.LEQUAL);break;case aa:n.depthFunc(n.EQUAL);break;case la:n.depthFunc(n.GEQUAL);break;case ca:n.depthFunc(n.GREATER);break;case ha:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}lt=ut}},setLocked:function(ut){V=ut},setClear:function(ut){Nt!==ut&&(Nt=ut,At&&(ut=1-ut),n.clearDepth(ut))},reset:function(){V=!1,q=null,lt=null,Nt=null,At=!1}}}function s(){let V=!1,At=null,q=null,lt=null,Nt=null,ut=null,Yt=null,zt=null,Ie=null;return{setTest:function(be){V||(be?nt(n.STENCIL_TEST):xt(n.STENCIL_TEST))},setMask:function(be){At!==be&&!V&&(n.stencilMask(be),At=be)},setFunc:function(be,Cn,me){(q!==be||lt!==Cn||Nt!==me)&&(n.stencilFunc(be,Cn,me),q=be,lt=Cn,Nt=me)},setOp:function(be,Cn,me){(ut!==be||Yt!==Cn||zt!==me)&&(n.stencilOp(be,Cn,me),ut=be,Yt=Cn,zt=me)},setLocked:function(be){V=be},setClear:function(be){Ie!==be&&(n.clearStencil(be),Ie=be)},reset:function(){V=!1,At=null,q=null,lt=null,Nt=null,ut=null,Yt=null,zt=null,Ie=null}}}let r=new e,o=new i,l=new s,a=new WeakMap,c=new WeakMap,u={},h={},f={},m=new WeakMap,_=[],v=null,p=!1,x=null,T=null,L=null,b=null,A=null,E=null,D=null,M=new ie(0,0,0),w=0,C=!1,N=null,X=null,U=null,P=null,k=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,st=0,O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(O)[1]),K=st>=1):O.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),K=st>=2);let ot=null,it={},Mt=n.getParameter(n.SCISSOR_BOX),gt=n.getParameter(n.VIEWPORT),vt=new He().fromArray(Mt),bt=new He().fromArray(gt);function _t(V,At,q,lt){let Nt=new Uint8Array(4),ut=n.createTexture();n.bindTexture(V,ut),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Yt=0;Yt<q;Yt++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(At,0,n.RGBA,1,1,lt,0,n.RGBA,n.UNSIGNED_BYTE,Nt):n.texImage2D(At+Yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Nt);return ut}let $={};$[n.TEXTURE_2D]=_t(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=_t(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=_t(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=_t(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),nt(n.DEPTH_TEST),o.setFunc(qs),Wt(!1),ee(Uc),nt(n.CULL_FACE),Zt(fi);function nt(V){u[V]!==!0&&(n.enable(V),u[V]=!0)}function xt(V){u[V]!==!1&&(n.disable(V),u[V]=!1)}function Lt(V,At){return f[V]!==At?(n.bindFramebuffer(V,At),f[V]=At,V===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=At),V===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=At),!0):!1}function ft(V,At){let q=_,lt=!1;if(V){q=m.get(At),q===void 0&&(q=[],m.set(At,q));let Nt=V.textures;if(q.length!==Nt.length||q[0]!==n.COLOR_ATTACHMENT0){for(let ut=0,Yt=Nt.length;ut<Yt;ut++)q[ut]=n.COLOR_ATTACHMENT0+ut;q.length=Nt.length,lt=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,lt=!0);lt&&n.drawBuffers(q)}function Ft(V){return v!==V?(n.useProgram(V),v=V,!0):!1}let jt={[ds]:n.FUNC_ADD,[bf]:n.FUNC_SUBTRACT,[wf]:n.FUNC_REVERSE_SUBTRACT};jt[Ef]=n.MIN,jt[Af]=n.MAX;let Ht={[Tf]:n.ZERO,[Rf]:n.ONE,[Cf]:n.SRC_COLOR,[zc]:n.SRC_ALPHA,[Uf]:n.SRC_ALPHA_SATURATE,[Df]:n.DST_COLOR,[Pf]:n.DST_ALPHA,[If]:n.ONE_MINUS_SRC_COLOR,[kc]:n.ONE_MINUS_SRC_ALPHA,[Nf]:n.ONE_MINUS_DST_COLOR,[Lf]:n.ONE_MINUS_DST_ALPHA,[Ff]:n.CONSTANT_COLOR,[Of]:n.ONE_MINUS_CONSTANT_COLOR,[Bf]:n.CONSTANT_ALPHA,[zf]:n.ONE_MINUS_CONSTANT_ALPHA};function Zt(V,At,q,lt,Nt,ut,Yt,zt,Ie,be){if(V===fi){p===!0&&(xt(n.BLEND),p=!1);return}if(p===!1&&(nt(n.BLEND),p=!0),V!==Sf){if(V!==x||be!==C){if((T!==ds||A!==ds)&&(n.blendEquation(n.FUNC_ADD),T=ds,A=ds),be)switch(V){case Qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fc:n.blendFunc(n.ONE,n.ONE);break;case Oc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ne("WebGLState: Invalid blending: ",V);break}else switch(V){case Qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Oc:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bc:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",V);break}L=null,b=null,E=null,D=null,M.set(0,0,0),w=0,x=V,C=be}return}Nt=Nt||At,ut=ut||q,Yt=Yt||lt,(At!==T||Nt!==A)&&(n.blendEquationSeparate(jt[At],jt[Nt]),T=At,A=Nt),(q!==L||lt!==b||ut!==E||Yt!==D)&&(n.blendFuncSeparate(Ht[q],Ht[lt],Ht[ut],Ht[Yt]),L=q,b=lt,E=ut,D=Yt),(zt.equals(M)===!1||Ie!==w)&&(n.blendColor(zt.r,zt.g,zt.b,Ie),M.copy(zt),w=Ie),x=V,C=!1}function ae(V,At){V.side===zn?xt(n.CULL_FACE):nt(n.CULL_FACE);let q=V.side===Mn;At&&(q=!q),Wt(q),V.blending===Qs&&V.transparent===!1?Zt(fi):Zt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let lt=V.stencilWrite;l.setTest(lt),lt&&(l.setMask(V.stencilWriteMask),l.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),l.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Xe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?nt(n.SAMPLE_ALPHA_TO_COVERAGE):xt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(V){N!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),N=V)}function ee(V){V!==yf?(nt(n.CULL_FACE),V!==X&&(V===Uc?n.cullFace(n.BACK):V===vf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xt(n.CULL_FACE),X=V}function Se(V){V!==U&&(K&&n.lineWidth(V),U=V)}function Xe(V,At,q){V?(nt(n.POLYGON_OFFSET_FILL),(P!==At||k!==q)&&(P=At,k=q,o.getReversed()&&(At=-At),n.polygonOffset(At,q))):xt(n.POLYGON_OFFSET_FILL)}function Ee(V){V?nt(n.SCISSOR_TEST):xt(n.SCISSOR_TEST)}function Le(V){V===void 0&&(V=n.TEXTURE0+Z-1),ot!==V&&(n.activeTexture(V),ot=V)}function H(V,At,q){q===void 0&&(ot===null?q=n.TEXTURE0+Z-1:q=ot);let lt=it[q];lt===void 0&&(lt={type:void 0,texture:void 0},it[q]=lt),(lt.type!==V||lt.texture!==At)&&(ot!==q&&(n.activeTexture(q),ot=q),n.bindTexture(V,At||$[V]),lt.type=V,lt.texture=At)}function Fe(){let V=it[ot];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function _e(){try{n.compressedTexImage2D(...arguments)}catch(V){ne("WebGLState:",V)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(V){ne("WebGLState:",V)}}function y(){try{n.texSubImage2D(...arguments)}catch(V){ne("WebGLState:",V)}}function Y(){try{n.texSubImage3D(...arguments)}catch(V){ne("WebGLState:",V)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(V){ne("WebGLState:",V)}}function at(){try{n.compressedTexSubImage3D(...arguments)}catch(V){ne("WebGLState:",V)}}function St(){try{n.texStorage2D(...arguments)}catch(V){ne("WebGLState:",V)}}function Et(){try{n.texStorage3D(...arguments)}catch(V){ne("WebGLState:",V)}}function ct(){try{n.texImage2D(...arguments)}catch(V){ne("WebGLState:",V)}}function ht(){try{n.texImage3D(...arguments)}catch(V){ne("WebGLState:",V)}}function Tt(V){return h[V]!==void 0?h[V]:n.getParameter(V)}function qt(V,At){h[V]!==At&&(n.pixelStorei(V,At),h[V]=At)}function Pt(V){vt.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),vt.copy(V))}function Rt(V){bt.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),bt.copy(V))}function Xt(V,At){let q=c.get(At);q===void 0&&(q=new WeakMap,c.set(At,q));let lt=q.get(V);lt===void 0&&(lt=n.getUniformBlockIndex(At,V.name),q.set(V,lt))}function Jt(V,At){let lt=c.get(At).get(V);a.get(At)!==lt&&(n.uniformBlockBinding(At,lt,V.__bindingPointIndex),a.set(At,lt))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},ot=null,it={},f={},m=new WeakMap,_=[],v=null,p=!1,x=null,T=null,L=null,b=null,A=null,E=null,D=null,M=new ie(0,0,0),w=0,C=!1,N=null,X=null,U=null,P=null,k=null,vt.set(0,0,n.canvas.width,n.canvas.height),bt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:nt,disable:xt,bindFramebuffer:Lt,drawBuffers:ft,useProgram:Ft,setBlending:Zt,setMaterial:ae,setFlipSided:Wt,setCullFace:ee,setLineWidth:Se,setPolygonOffset:Xe,setScissorTest:Ee,activeTexture:Le,bindTexture:H,unbindTexture:Fe,compressedTexImage2D:_e,compressedTexImage3D:I,texImage2D:ct,texImage3D:ht,pixelStorei:qt,getParameter:Tt,updateUBOMapping:Xt,uniformBlockBinding:Jt,texStorage2D:St,texStorage3D:Et,texSubImage2D:y,texSubImage3D:Y,compressedTexSubImage2D:j,compressedTexSubImage3D:at,scissor:Pt,viewport:Rt,reset:se}}function Ay(n,t,e,i,s,r,o){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,u=new WeakMap,h=new Set,f,m=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,y){return _?new OffscreenCanvas(I,y):Cr("canvas")}function p(I,y,Y){let j=1,at=_e(I);if((at.width>Y||at.height>Y)&&(j=Y/Math.max(at.width,at.height)),j<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let St=Math.floor(j*at.width),Et=Math.floor(j*at.height);f===void 0&&(f=v(St,Et));let ct=y?v(St,Et):f;return ct.width=St,ct.height=Et,ct.getContext("2d").drawImage(I,0,0,St,Et),te("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+St+"x"+Et+")."),ct}else return"data"in I&&te("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),I;return I}function x(I){return I.generateMipmaps}function T(I){n.generateMipmap(I)}function L(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(I,y,Y,j,at,St=!1){if(I!==null){if(n[I]!==void 0)return n[I];te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Et;j&&(Et=t.get("EXT_texture_norm16"),Et||te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ct=y;if(y===n.RED&&(Y===n.FLOAT&&(ct=n.R32F),Y===n.HALF_FLOAT&&(ct=n.R16F),Y===n.UNSIGNED_BYTE&&(ct=n.R8),Y===n.UNSIGNED_SHORT&&Et&&(ct=Et.R16_EXT),Y===n.SHORT&&Et&&(ct=Et.R16_SNORM_EXT)),y===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ct=n.R8UI),Y===n.UNSIGNED_SHORT&&(ct=n.R16UI),Y===n.UNSIGNED_INT&&(ct=n.R32UI),Y===n.BYTE&&(ct=n.R8I),Y===n.SHORT&&(ct=n.R16I),Y===n.INT&&(ct=n.R32I)),y===n.RG&&(Y===n.FLOAT&&(ct=n.RG32F),Y===n.HALF_FLOAT&&(ct=n.RG16F),Y===n.UNSIGNED_BYTE&&(ct=n.RG8),Y===n.UNSIGNED_SHORT&&Et&&(ct=Et.RG16_EXT),Y===n.SHORT&&Et&&(ct=Et.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ct=n.RG8UI),Y===n.UNSIGNED_SHORT&&(ct=n.RG16UI),Y===n.UNSIGNED_INT&&(ct=n.RG32UI),Y===n.BYTE&&(ct=n.RG8I),Y===n.SHORT&&(ct=n.RG16I),Y===n.INT&&(ct=n.RG32I)),y===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ct=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(ct=n.RGB16UI),Y===n.UNSIGNED_INT&&(ct=n.RGB32UI),Y===n.BYTE&&(ct=n.RGB8I),Y===n.SHORT&&(ct=n.RGB16I),Y===n.INT&&(ct=n.RGB32I)),y===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ct=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(ct=n.RGBA16UI),Y===n.UNSIGNED_INT&&(ct=n.RGBA32UI),Y===n.BYTE&&(ct=n.RGBA8I),Y===n.SHORT&&(ct=n.RGBA16I),Y===n.INT&&(ct=n.RGBA32I)),y===n.RGB&&(Y===n.UNSIGNED_SHORT&&Et&&(ct=Et.RGB16_EXT),Y===n.SHORT&&Et&&(ct=Et.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(ct=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(ct=n.R11F_G11F_B10F)),y===n.RGBA){let ht=St?Tr:xe.getTransfer(at);Y===n.FLOAT&&(ct=n.RGBA32F),Y===n.HALF_FLOAT&&(ct=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(ct=ht===Ce?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&Et&&(ct=Et.RGBA16_EXT),Y===n.SHORT&&Et&&(ct=Et.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(ct=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(ct=n.RGB5_A1)}return(ct===n.R16F||ct===n.R32F||ct===n.RG16F||ct===n.RG32F||ct===n.RGBA16F||ct===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function A(I,y){let Y;return I?y===null||y===Jn||y===er?Y=n.DEPTH24_STENCIL8:y===Kn?Y=n.DEPTH32F_STENCIL8:y===tr&&(Y=n.DEPTH24_STENCIL8,te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Jn||y===er?Y=n.DEPTH_COMPONENT24:y===Kn?Y=n.DEPTH_COMPONENT32F:y===tr&&(Y=n.DEPTH_COMPONENT16),Y}function E(I,y){return x(I)===!0||I.isFramebufferTexture&&I.minFilter!==an&&I.minFilter!==je?Math.log2(Math.max(y.width,y.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?y.mipmaps.length:1}function D(I){let y=I.target;y.removeEventListener("dispose",D),w(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&h.delete(y)}function M(I){let y=I.target;y.removeEventListener("dispose",M),N(y)}function w(I){let y=i.get(I);if(y.__webglInit===void 0)return;let Y=I.source,j=m.get(Y);if(j){let at=j[y.__cacheKey];at.usedTimes--,at.usedTimes===0&&C(I),Object.keys(j).length===0&&m.delete(Y)}i.remove(I)}function C(I){let y=i.get(I);n.deleteTexture(y.__webglTexture);let Y=I.source,j=m.get(Y);delete j[y.__cacheKey],o.memory.textures--}function N(I){let y=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let at=0;at<y.__webglFramebuffer[j].length;at++)n.deleteFramebuffer(y.__webglFramebuffer[j][at]);else n.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)n.deleteFramebuffer(y.__webglFramebuffer[j]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let Y=I.textures;for(let j=0,at=Y.length;j<at;j++){let St=i.get(Y[j]);St.__webglTexture&&(n.deleteTexture(St.__webglTexture),o.memory.textures--),i.remove(Y[j])}i.remove(I)}let X=0;function U(){X=0}function P(){return X}function k(I){X=I}function Z(){let I=X;return I>=s.maxTextures&&te("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,I}function K(I){let y=[];return y.push(I.wrapS),y.push(I.wrapT),y.push(I.wrapR||0),y.push(I.magFilter),y.push(I.minFilter),y.push(I.anisotropy),y.push(I.internalFormat),y.push(I.format),y.push(I.type),y.push(I.generateMipmaps),y.push(I.premultiplyAlpha),y.push(I.flipY),y.push(I.unpackAlignment),y.push(I.colorSpace),y.join()}function st(I,y){let Y=i.get(I);if(I.isVideoTexture&&H(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Y.__version!==I.version){let j=I.image;if(j===null)te("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)te("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(Y,I,y);return}}else I.isExternalTexture&&(Y.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+y)}function O(I,y){let Y=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){xt(Y,I,y);return}else I.isExternalTexture&&(Y.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+y)}function ot(I,y){let Y=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){xt(Y,I,y);return}e.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+y)}function it(I,y){let Y=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Y.__version!==I.version){Lt(Y,I,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+y)}let Mt={[ua]:n.REPEAT,[oi]:n.CLAMP_TO_EDGE,[fa]:n.MIRRORED_REPEAT},gt={[an]:n.NEAREST,[Gf]:n.NEAREST_MIPMAP_NEAREST,[$r]:n.NEAREST_MIPMAP_LINEAR,[je]:n.LINEAR,[Ga]:n.LINEAR_MIPMAP_NEAREST,[Ki]:n.LINEAR_MIPMAP_LINEAR},vt={[qf]:n.NEVER,[Kf]:n.ALWAYS,[Yf]:n.LESS,[El]:n.LEQUAL,[$f]:n.EQUAL,[Al]:n.GEQUAL,[Zf]:n.GREATER,[Jf]:n.NOTEQUAL};function bt(I,y){if(y.type===Kn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===je||y.magFilter===Ga||y.magFilter===$r||y.magFilter===Ki||y.minFilter===je||y.minFilter===Ga||y.minFilter===$r||y.minFilter===Ki)&&te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,Mt[y.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Mt[y.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Mt[y.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,gt[y.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,gt[y.minFilter]),y.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,vt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===an||y.minFilter!==$r&&y.minFilter!==Ki||y.type===Kn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");n.texParameterf(I,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function _t(I,y){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,y.addEventListener("dispose",D));let j=y.source,at=m.get(j);at===void 0&&(at={},m.set(j,at));let St=K(y);if(St!==I.__cacheKey){at[St]===void 0&&(at[St]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),at[St].usedTimes++;let Et=at[I.__cacheKey];Et!==void 0&&(at[I.__cacheKey].usedTimes--,Et.usedTimes===0&&C(y)),I.__cacheKey=St,I.__webglTexture=at[St].texture}return Y}function $(I,y,Y){return Math.floor(Math.floor(I/Y)/y)}function nt(I,y,Y,j){let St=I.updateRanges;if(St.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,Y,j,y.data);else{St.sort((qt,Pt)=>qt.start-Pt.start);let Et=0;for(let qt=1;qt<St.length;qt++){let Pt=St[Et],Rt=St[qt],Xt=Pt.start+Pt.count,Jt=$(Rt.start,y.width,4),se=$(Pt.start,y.width,4);Rt.start<=Xt+1&&Jt===se&&$(Rt.start+Rt.count-1,y.width,4)===Jt?Pt.count=Math.max(Pt.count,Rt.start+Rt.count-Pt.start):(++Et,St[Et]=Rt)}St.length=Et+1;let ct=e.getParameter(n.UNPACK_ROW_LENGTH),ht=e.getParameter(n.UNPACK_SKIP_PIXELS),Tt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let qt=0,Pt=St.length;qt<Pt;qt++){let Rt=St[qt],Xt=Math.floor(Rt.start/4),Jt=Math.ceil(Rt.count/4),se=Xt%y.width,V=Math.floor(Xt/y.width),At=Jt,q=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,se),e.pixelStorei(n.UNPACK_SKIP_ROWS,V),e.texSubImage2D(n.TEXTURE_2D,0,se,V,At,q,Y,j,y.data)}I.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,ct),e.pixelStorei(n.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(n.UNPACK_SKIP_ROWS,Tt)}}function xt(I,y,Y){let j=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=n.TEXTURE_3D);let at=_t(I,y),St=y.source;e.bindTexture(j,I.__webglTexture,n.TEXTURE0+Y);let Et=i.get(St);if(St.version!==Et.__version||at===!0){if(e.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let q=xe.getPrimaries(xe.workingColorSpace),lt=y.colorSpace===wi?null:xe.getPrimaries(y.colorSpace),Nt=y.colorSpace===wi||q===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt)}e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let ht=p(y.image,!1,s.maxTextureSize);ht=Fe(y,ht);let Tt=r.convert(y.format,y.colorSpace),qt=r.convert(y.type),Pt=b(y.internalFormat,Tt,qt,y.normalized,y.colorSpace,y.isVideoTexture);bt(j,y);let Rt,Xt=y.mipmaps,Jt=y.isVideoTexture!==!0,se=Et.__version===void 0||at===!0,V=St.dataReady,At=E(y,ht);if(y.isDepthTexture)Pt=A(y.format===ji,y.type),se&&(Jt?e.texStorage2D(n.TEXTURE_2D,1,Pt,ht.width,ht.height):e.texImage2D(n.TEXTURE_2D,0,Pt,ht.width,ht.height,0,Tt,qt,null));else if(y.isDataTexture)if(Xt.length>0){Jt&&se&&e.texStorage2D(n.TEXTURE_2D,At,Pt,Xt[0].width,Xt[0].height);for(let q=0,lt=Xt.length;q<lt;q++)Rt=Xt[q],Jt?V&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,Rt.width,Rt.height,Tt,qt,Rt.data):e.texImage2D(n.TEXTURE_2D,q,Pt,Rt.width,Rt.height,0,Tt,qt,Rt.data);y.generateMipmaps=!1}else Jt?(se&&e.texStorage2D(n.TEXTURE_2D,At,Pt,ht.width,ht.height),V&&nt(y,ht,Tt,qt)):e.texImage2D(n.TEXTURE_2D,0,Pt,ht.width,ht.height,0,Tt,qt,ht.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Jt&&se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,At,Pt,Xt[0].width,Xt[0].height,ht.depth);for(let q=0,lt=Xt.length;q<lt;q++)if(Rt=Xt[q],y.format!==kn)if(Tt!==null)if(Jt){if(V)if(y.layerUpdates.size>0){let Nt=ch(Rt.width,Rt.height,y.format,y.type);for(let ut of y.layerUpdates){let Yt=Rt.data.subarray(ut*Nt/Rt.data.BYTES_PER_ELEMENT,(ut+1)*Nt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,ut,Rt.width,Rt.height,1,Tt,Yt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Rt.width,Rt.height,ht.depth,Tt,Rt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Pt,Rt.width,Rt.height,ht.depth,0,Rt.data,0,0);else te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?V&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Rt.width,Rt.height,ht.depth,Tt,qt,Rt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,q,Pt,Rt.width,Rt.height,ht.depth,0,Tt,qt,Rt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Jt&&se&&e.texStorage2D(n.TEXTURE_2D,At,Pt,Xt[0].width,Xt[0].height);for(let q=0,lt=Xt.length;q<lt;q++)Rt=Xt[q],y.format!==kn?Tt!==null?Jt?V&&e.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,Rt.width,Rt.height,Tt,Rt.data):e.compressedTexImage2D(n.TEXTURE_2D,q,Pt,Rt.width,Rt.height,0,Rt.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?V&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,Rt.width,Rt.height,Tt,qt,Rt.data):e.texImage2D(n.TEXTURE_2D,q,Pt,Rt.width,Rt.height,0,Tt,qt,Rt.data)}else if(y.isDataArrayTexture)if(Jt){if(se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,At,Pt,ht.width,ht.height,ht.depth),V)if(y.layerUpdates.size>0){let q=ch(ht.width,ht.height,y.format,y.type);for(let lt of y.layerUpdates){let Nt=ht.data.subarray(lt*q/ht.data.BYTES_PER_ELEMENT,(lt+1)*q/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,lt,ht.width,ht.height,1,Tt,qt,Nt)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Tt,qt,ht.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Pt,ht.width,ht.height,ht.depth,0,Tt,qt,ht.data);else if(y.isData3DTexture)Jt?(se&&e.texStorage3D(n.TEXTURE_3D,At,Pt,ht.width,ht.height,ht.depth),V&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Tt,qt,ht.data)):e.texImage3D(n.TEXTURE_3D,0,Pt,ht.width,ht.height,ht.depth,0,Tt,qt,ht.data);else if(y.isFramebufferTexture){if(se)if(Jt)e.texStorage2D(n.TEXTURE_2D,At,Pt,ht.width,ht.height);else{let q=ht.width,lt=ht.height;for(let Nt=0;Nt<At;Nt++)e.texImage2D(n.TEXTURE_2D,Nt,Pt,q,lt,0,Tt,qt,null),q>>=1,lt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let q=n.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),ht.parentNode!==q){q.appendChild(ht),h.add(y),q.onpaint=lt=>{let Nt=lt.changedElements;for(let ut of h)Nt.includes(ut.image)&&(ut.needsUpdate=!0)},q.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ht);else{let Nt=n.RGBA,ut=n.RGBA,Yt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Nt,ut,Yt,ht)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Xt.length>0){if(Jt&&se){let q=_e(Xt[0]);e.texStorage2D(n.TEXTURE_2D,At,Pt,q.width,q.height)}for(let q=0,lt=Xt.length;q<lt;q++)Rt=Xt[q],Jt?V&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,Tt,qt,Rt):e.texImage2D(n.TEXTURE_2D,q,Pt,Tt,qt,Rt);y.generateMipmaps=!1}else if(Jt){if(se){let q=_e(ht);e.texStorage2D(n.TEXTURE_2D,At,Pt,q.width,q.height)}V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Tt,qt,ht)}else e.texImage2D(n.TEXTURE_2D,0,Pt,Tt,qt,ht);x(y)&&T(j),Et.__version=St.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function Lt(I,y,Y){if(y.image.length!==6)return;let j=_t(I,y),at=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+Y);let St=i.get(at);if(at.version!==St.__version||j===!0){e.activeTexture(n.TEXTURE0+Y);let Et=xe.getPrimaries(xe.workingColorSpace),ct=y.colorSpace===wi?null:xe.getPrimaries(y.colorSpace),ht=y.colorSpace===wi||Et===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Tt=y.isCompressedTexture||y.image[0].isCompressedTexture,qt=y.image[0]&&y.image[0].isDataTexture,Pt=[];for(let ut=0;ut<6;ut++)!Tt&&!qt?Pt[ut]=p(y.image[ut],!0,s.maxCubemapSize):Pt[ut]=qt?y.image[ut].image:y.image[ut],Pt[ut]=Fe(y,Pt[ut]);let Rt=Pt[0],Xt=r.convert(y.format,y.colorSpace),Jt=r.convert(y.type),se=b(y.internalFormat,Xt,Jt,y.normalized,y.colorSpace),V=y.isVideoTexture!==!0,At=St.__version===void 0||j===!0,q=at.dataReady,lt=E(y,Rt);bt(n.TEXTURE_CUBE_MAP,y);let Nt;if(Tt){V&&At&&e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,se,Rt.width,Rt.height);for(let ut=0;ut<6;ut++){Nt=Pt[ut].mipmaps;for(let Yt=0;Yt<Nt.length;Yt++){let zt=Nt[Yt];y.format!==kn?Xt!==null?V?q&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Yt,0,0,zt.width,zt.height,Xt,zt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Yt,se,zt.width,zt.height,0,zt.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Yt,0,0,zt.width,zt.height,Xt,Jt,zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Yt,se,zt.width,zt.height,0,Xt,Jt,zt.data)}}}else{if(Nt=y.mipmaps,V&&At){Nt.length>0&&lt++;let ut=_e(Pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,se,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(qt){V?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Pt[ut].width,Pt[ut].height,Xt,Jt,Pt[ut].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,se,Pt[ut].width,Pt[ut].height,0,Xt,Jt,Pt[ut].data);for(let Yt=0;Yt<Nt.length;Yt++){let Ie=Nt[Yt].image[ut].image;V?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Yt+1,0,0,Ie.width,Ie.height,Xt,Jt,Ie.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Yt+1,se,Ie.width,Ie.height,0,Xt,Jt,Ie.data)}}else{V?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Xt,Jt,Pt[ut]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,se,Xt,Jt,Pt[ut]);for(let Yt=0;Yt<Nt.length;Yt++){let zt=Nt[Yt];V?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Yt+1,0,0,Xt,Jt,zt.image[ut]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Yt+1,se,Xt,Jt,zt.image[ut])}}}x(y)&&T(n.TEXTURE_CUBE_MAP),St.__version=at.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function ft(I,y,Y,j,at,St){let Et=r.convert(Y.format,Y.colorSpace),ct=r.convert(Y.type),ht=b(Y.internalFormat,Et,ct,Y.normalized,Y.colorSpace),Tt=i.get(y),qt=i.get(Y);if(qt.__renderTarget=y,!Tt.__hasExternalTextures){let Pt=Math.max(1,y.width>>St),Rt=Math.max(1,y.height>>St);at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY?e.texImage3D(at,St,ht,Pt,Rt,y.depth,0,Et,ct,null):e.texImage2D(at,St,ht,Pt,Rt,0,Et,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,I),Le(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,at,qt.__webglTexture,0,Ee(y)):(at===n.TEXTURE_2D||at>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,at,qt.__webglTexture,St),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(I,y,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,I),y.depthBuffer){let j=y.depthTexture,at=j&&j.isDepthTexture?j.type:null,St=A(y.stencilBuffer,at),Et=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Le(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee(y),St,y.width,y.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee(y),St,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,St,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Et,n.RENDERBUFFER,I)}else{let j=y.textures;for(let at=0;at<j.length;at++){let St=j[at],Et=r.convert(St.format,St.colorSpace),ct=r.convert(St.type),ht=b(St.internalFormat,Et,ct,St.normalized,St.colorSpace);Le(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee(y),ht,y.width,y.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee(y),ht,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ht,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function jt(I,y,Y){let j=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,I),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let at=i.get(y.depthTexture);if(at.__renderTarget=y,(!at.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j){if(at.__webglInit===void 0&&(at.__webglInit=!0,y.depthTexture.addEventListener("dispose",D)),at.__webglTexture===void 0){at.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,at.__webglTexture),bt(n.TEXTURE_CUBE_MAP,y.depthTexture);let Tt=r.convert(y.depthTexture.format),qt=r.convert(y.depthTexture.type),Pt;y.depthTexture.format===ai?Pt=n.DEPTH_COMPONENT24:y.depthTexture.format===ji&&(Pt=n.DEPTH24_STENCIL8);for(let Rt=0;Rt<6;Rt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Pt,y.width,y.height,0,Tt,qt,null)}}else st(y.depthTexture,0);let St=at.__webglTexture,Et=Ee(y),ct=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,ht=y.depthTexture.format===ji?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===ai)Le(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,ct,St,0,Et):n.framebufferTexture2D(n.FRAMEBUFFER,ht,ct,St,0);else if(y.depthTexture.format===ji)Le(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,ct,St,0,Et):n.framebufferTexture2D(n.FRAMEBUFFER,ht,ct,St,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ht(I){let y=i.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==I.depthTexture){let j=I.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){let at=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",at)};j.addEventListener("dispose",at),y.__depthDisposeCallback=at}y.__boundDepthTexture=j}if(I.depthTexture&&!y.__autoAllocateDepthBuffer)if(Y)for(let j=0;j<6;j++)jt(y.__webglFramebuffer[j],I,j);else{let j=I.texture.mipmaps;j&&j.length>0?jt(y.__webglFramebuffer[0],I,0):jt(y.__webglFramebuffer,I,0)}else if(Y){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=n.createRenderbuffer(),Ft(y.__webglDepthbuffer[j],I,!1);else{let at=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=y.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,St),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,St)}}else{let j=I.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Ft(y.__webglDepthbuffer,I,!1);else{let at=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,St),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,St)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Zt(I,y,Y){let j=i.get(I);y!==void 0&&ft(j.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&Ht(I)}function ae(I){let y=I.texture,Y=i.get(I),j=i.get(y);I.addEventListener("dispose",M);let at=I.textures,St=I.isWebGLCubeRenderTarget===!0,Et=at.length>1;if(Et||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=y.version,o.memory.textures++),St){Y.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer[ct]=[];for(let ht=0;ht<y.mipmaps.length;ht++)Y.__webglFramebuffer[ct][ht]=n.createFramebuffer()}else Y.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ct=0;ct<y.mipmaps.length;ct++)Y.__webglFramebuffer[ct]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Et)for(let ct=0,ht=at.length;ct<ht;ct++){let Tt=i.get(at[ct]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&Le(I)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ct=0;ct<at.length;ct++){let ht=at[ct];Y.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[ct]);let Tt=r.convert(ht.format,ht.colorSpace),qt=r.convert(ht.type),Pt=b(ht.internalFormat,Tt,qt,ht.normalized,ht.colorSpace,I.isXRRenderTarget===!0),Rt=Ee(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,Pt,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,Y.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Ft(Y.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(St){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),bt(n.TEXTURE_CUBE_MAP,y);for(let ct=0;ct<6;ct++)if(y.mipmaps&&y.mipmaps.length>0)for(let ht=0;ht<y.mipmaps.length;ht++)ft(Y.__webglFramebuffer[ct][ht],I,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ht);else ft(Y.__webglFramebuffer[ct],I,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);x(y)&&T(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ct=0,ht=at.length;ct<ht;ct++){let Tt=at[ct],qt=i.get(Tt),Pt=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Pt=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Pt,qt.__webglTexture),bt(Pt,Tt),ft(Y.__webglFramebuffer,I,Tt,n.COLOR_ATTACHMENT0+ct,Pt,0),x(Tt)&&T(Pt)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ct=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,j.__webglTexture),bt(ct,y),y.mipmaps&&y.mipmaps.length>0)for(let ht=0;ht<y.mipmaps.length;ht++)ft(Y.__webglFramebuffer[ht],I,y,n.COLOR_ATTACHMENT0,ct,ht);else ft(Y.__webglFramebuffer,I,y,n.COLOR_ATTACHMENT0,ct,0);x(y)&&T(ct),e.unbindTexture()}I.depthBuffer&&Ht(I)}function Wt(I){let y=I.textures;for(let Y=0,j=y.length;Y<j;Y++){let at=y[Y];if(x(at)){let St=L(I),Et=i.get(at).__webglTexture;e.bindTexture(St,Et),T(St),e.unbindTexture()}}}let ee=[],Se=[];function Xe(I){if(I.samples>0){if(Le(I)===!1){let y=I.textures,Y=I.width,j=I.height,at=n.COLOR_BUFFER_BIT,St=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=i.get(I),ct=y.length>1;if(ct)for(let Tt=0;Tt<y.length;Tt++)e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);let ht=I.texture.mipmaps;ht&&ht.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Tt=0;Tt<y.length;Tt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(at|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(at|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Et.__webglColorRenderbuffer[Tt]);let qt=i.get(y[Tt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qt,0)}n.blitFramebuffer(0,0,Y,j,0,0,Y,j,at,n.NEAREST),a===!0&&(ee.length=0,Se.length=0,ee.push(n.COLOR_ATTACHMENT0+Tt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(ee.push(St),Se.push(St),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Se)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let Tt=0;Tt<y.length;Tt++){e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,Et.__webglColorRenderbuffer[Tt]);let qt=i.get(y[Tt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,qt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&a){let y=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Ee(I){return Math.min(s.maxSamples,I.samples)}function Le(I){let y=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function H(I){let y=o.render.frame;u.get(I)!==y&&(u.set(I,y),I.update())}function Fe(I,y){let Y=I.colorSpace,j=I.format,at=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Y!==Ar&&Y!==wi&&(xe.getTransfer(Y)===Ce?(j!==kn||at!==Nn)&&te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",Y)),y}function _e(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=U,this.getTextureUnits=P,this.setTextureUnits=k,this.setTexture2D=st,this.setTexture2DArray=O,this.setTexture3D=ot,this.setTextureCube=it,this.rebindTextures=Zt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Le,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ty(n,t){function e(i,s=wi){let r,o=xe.getTransfer(s);if(i===Nn)return n.UNSIGNED_BYTE;if(i===Wa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Jc)return n.BYTE;if(i===Kc)return n.SHORT;if(i===tr)return n.UNSIGNED_SHORT;if(i===Ha)return n.INT;if(i===Jn)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===jn)return n.HALF_FLOAT;if(i===th)return n.ALPHA;if(i===eh)return n.RGB;if(i===kn)return n.RGBA;if(i===ai)return n.DEPTH_COMPONENT;if(i===ji)return n.DEPTH_STENCIL;if(i===nh)return n.RED;if(i===qa)return n.RED_INTEGER;if(i===Qi)return n.RG;if(i===Ya)return n.RG_INTEGER;if(i===$a)return n.RGBA_INTEGER;if(i===Zr||i===Jr||i===Kr||i===jr)if(o===Ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Za||i===Ja||i===Ka||i===ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qa||i===tl||i===el||i===nl||i===il||i===Qr||i===sl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Qa||i===tl)return o===Ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===el)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===nl)return r.COMPRESSED_R11_EAC;if(i===il)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Qr)return r.COMPRESSED_RG11_EAC;if(i===sl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===rl||i===ol||i===al||i===ll||i===cl||i===hl||i===ul||i===fl||i===dl||i===pl||i===ml||i===gl||i===xl||i===_l)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===rl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ol)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===al)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ll)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ul)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ml)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_l)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yl||i===vl||i===Ml)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===yl)return o===Ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sl||i===bl||i===to||i===wl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Sl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===to)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new kr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new mn({vertexShader:Ry,fragmentShader:Cy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new We(new Gr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ch=class extends li{constructor(t,e){super();let i=this,s=null,r=1,o=null,l="local-floor",a=1,c=null,u=null,h=null,f=null,m=null,_=null,v=typeof XRWebGLBinding<"u",p=new Rh,x={},T=e.getContextAttributes(),L=null,b=null,A=[],E=[],D=new fe,M=null,w=null,C=new pn;C.viewport=new He;let N=new pn;N.viewport=new He;let X=[C,N],U=new Ba,P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let nt=A[$];return nt===void 0&&(nt=new Zs,A[$]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function($){let nt=A[$];return nt===void 0&&(nt=new Zs,A[$]=nt),nt.getGripSpace()},this.getHand=function($){let nt=A[$];return nt===void 0&&(nt=new Zs,A[$]=nt),nt.getHandSpace()};function Z($){let nt=E.indexOf($.inputSource);if(nt===-1)return;let xt=A[nt];xt!==void 0&&(xt.update($.inputSource,$.frame,c||o),xt.dispatchEvent({type:$.type,data:$.inputSource}))}function K(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",st);for(let $=0;$<A.length;$++){let nt=E[$];nt!==null&&(E[$]=null,A[$].disconnect(nt))}P=null,k=null,p.reset();for(let $ in x)delete x[$];if(t.setRenderTarget(L),m=null,f=null,h=null,s=null,b=null,_t.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(D.width,D.height,!1),w!==null){let $=w.camera;$.fov=w.fov,$.zoom=w.zoom,$.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){l=$,i.isPresenting===!0&&te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",K),s.addEventListener("inputsourceschange",st),T.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(D),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Lt=null,ft=null;T.depth&&(ft=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=T.stencil?ji:ai,Lt=T.stencil?er:Jn);let Ft={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Ft),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new wn(f.textureWidth,f.textureHeight,{format:kn,type:Nn,depthTexture:new Xi(f.textureWidth,f.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let xt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new wn(m.framebufferWidth,m.framebufferHeight,{format:kn,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(a),c=null,o=await s.requestReferenceSpace(l),_t.setContext(s),_t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function st($){for(let nt=0;nt<$.removed.length;nt++){let xt=$.removed[nt],Lt=E.indexOf(xt);Lt>=0&&(E[Lt]=null,A[Lt].disconnect(xt))}for(let nt=0;nt<$.added.length;nt++){let xt=$.added[nt],Lt=E.indexOf(xt);if(Lt===-1){for(let Ft=0;Ft<A.length;Ft++)if(Ft>=E.length){E.push(xt),Lt=Ft;break}else if(E[Ft]===null){E[Ft]=xt,Lt=Ft;break}if(Lt===-1)break}let ft=A[Lt];ft&&ft.connect(xt)}}let O=new J,ot=new J;function it($,nt,xt){O.setFromMatrixPosition(nt.matrixWorld),ot.setFromMatrixPosition(xt.matrixWorld);let Lt=O.distanceTo(ot),ft=nt.projectionMatrix.elements,Ft=xt.projectionMatrix.elements,jt=ft[14]/(ft[10]-1),Ht=ft[14]/(ft[10]+1),Zt=(ft[9]+1)/ft[5],ae=(ft[9]-1)/ft[5],Wt=(ft[8]-1)/ft[0],ee=(Ft[8]+1)/Ft[0],Se=jt*Wt,Xe=jt*ee,Ee=Lt/(-Wt+ee),Le=Ee*-Wt;if(nt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Le),$.translateZ(Ee),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ft[10]===-1)$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let H=jt+Ee,Fe=Ht+Ee,_e=Se-Le,I=Xe+(Lt-Le),y=Zt*Ht/Fe*H,Y=ae*Ht/Fe*H;$.projectionMatrix.makePerspective(_e,I,y,Y,H,Fe),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Mt($,nt){nt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(nt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let nt=$.near,xt=$.far;p.texture!==null&&(p.depthNear>0&&(nt=p.depthNear),p.depthFar>0&&(xt=p.depthFar)),U.near=N.near=C.near=nt,U.far=N.far=C.far=xt,(P!==U.near||k!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),P=U.near,k=U.far),U.layers.mask=$.layers.mask|6,C.layers.mask=U.layers.mask&-5,N.layers.mask=U.layers.mask&-3;let Lt=$.parent,ft=U.cameras;Mt(U,Lt);for(let Ft=0;Ft<ft.length;Ft++)Mt(ft[Ft],Lt);ft.length===2?it(U,C,N):U.projectionMatrix.copy(C.projectionMatrix),w===null&&$.isPerspectiveCamera&&(w={camera:$,fov:$.fov,zoom:$.zoom}),gt($,U,Lt)};function gt($,nt,xt){xt===null?$.matrix.copy(nt.matrixWorld):($.matrix.copy(xt.matrixWorld),$.matrix.invert(),$.matrix.multiply(nt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=pa*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&m===null))return a},this.setFoveation=function($){a=$,f!==null&&(f.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(U)},this.getCameraTexture=function($){return x[$]};let vt=null;function bt($,nt){if(u=nt.getViewerPose(c||o),_=nt,u!==null){let xt=u.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let Lt=!1;xt.length!==U.cameras.length&&(U.cameras.length=0,Lt=!0);for(let Ht=0;Ht<xt.length;Ht++){let Zt=xt[Ht],ae=null;if(m!==null)ae=m.getViewport(Zt);else{let ee=h.getViewSubImage(f,Zt);ae=ee.viewport,Ht===0&&(t.setRenderTargetTextures(b,ee.colorTexture,ee.depthStencilTexture),t.setRenderTarget(b))}let Wt=X[Ht];Wt===void 0&&(Wt=new pn,Wt.layers.enable(Ht),Wt.viewport=new He,X[Ht]=Wt),Wt.matrix.fromArray(Zt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Zt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ae.x,ae.y,ae.width,ae.height),Ht===0&&(U.matrix.copy(Wt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Lt===!0&&U.cameras.push(Wt)}let ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=i.getBinding();let Ht=h.getDepthInformation(xt[0]);Ht&&Ht.isValid&&Ht.texture&&p.init(Ht,s.renderState)}if(ft&&ft.includes("camera-access")&&v){t.state.unbindTexture(),h=i.getBinding();for(let Ht=0;Ht<xt.length;Ht++){let Zt=xt[Ht].camera;if(Zt){let ae=x[Zt];ae||(ae=new kr,x[Zt]=ae);let Wt=h.getCameraImage(Zt);ae.sourceTexture=Wt}}}}for(let xt=0;xt<A.length;xt++){let Lt=E[xt],ft=A[xt];Lt!==null&&ft!==void 0&&ft.update(Lt,nt,c||o)}vt&&vt($,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),_=null}let _t=new Rd;_t.setAnimationLoop(bt),this.setAnimationLoop=function($){vt=$},this.dispose=function(){}}},Iy=new ke,Nd=new oe;Nd.set(-1,0,0,0,1,0,0,0,1);function Py(n,t){function e(p,x){p.matrixAutoUpdate===!0&&p.updateMatrix(),x.value.copy(p.matrix)}function i(p,x){x.color.getRGB(p.fogColor.value,oh(n)),x.isFog?(p.fogNear.value=x.near,p.fogFar.value=x.far):x.isFogExp2&&(p.fogDensity.value=x.density)}function s(p,x,T,L,b){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(p,x):x.isMeshLambertMaterial?(r(p,x),x.envMap&&(p.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(p,x),h(p,x)):x.isMeshPhongMaterial?(r(p,x),u(p,x),x.envMap&&(p.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(p,x),f(p,x),x.isMeshPhysicalMaterial&&m(p,x,b)):x.isMeshMatcapMaterial?(r(p,x),_(p,x)):x.isMeshDepthMaterial?r(p,x):x.isMeshDistanceMaterial?(r(p,x),v(p,x)):x.isMeshNormalMaterial?r(p,x):x.isLineBasicMaterial?(o(p,x),x.isLineDashedMaterial&&l(p,x)):x.isPointsMaterial?a(p,x,T,L):x.isSpriteMaterial?c(p,x):x.isShadowMaterial?(p.color.value.copy(x.color),p.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(p,x){p.opacity.value=x.opacity,x.color&&p.diffuse.value.copy(x.color),x.emissive&&p.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(p.map.value=x.map,e(x.map,p.mapTransform)),x.alphaMap&&(p.alphaMap.value=x.alphaMap,e(x.alphaMap,p.alphaMapTransform)),x.bumpMap&&(p.bumpMap.value=x.bumpMap,e(x.bumpMap,p.bumpMapTransform),p.bumpScale.value=x.bumpScale,x.side===Mn&&(p.bumpScale.value*=-1)),x.normalMap&&(p.normalMap.value=x.normalMap,e(x.normalMap,p.normalMapTransform),p.normalScale.value.copy(x.normalScale),x.side===Mn&&p.normalScale.value.negate()),x.displacementMap&&(p.displacementMap.value=x.displacementMap,e(x.displacementMap,p.displacementMapTransform),p.displacementScale.value=x.displacementScale,p.displacementBias.value=x.displacementBias),x.emissiveMap&&(p.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,p.emissiveMapTransform)),x.specularMap&&(p.specularMap.value=x.specularMap,e(x.specularMap,p.specularMapTransform)),x.alphaTest>0&&(p.alphaTest.value=x.alphaTest);let T=t.get(x),L=T.envMap,b=T.envMapRotation;L&&(p.envMap.value=L,p.envMapRotation.value.setFromMatrix4(Iy.makeRotationFromEuler(b)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Nd),p.reflectivity.value=x.reflectivity,p.ior.value=x.ior,p.refractionRatio.value=x.refractionRatio),x.lightMap&&(p.lightMap.value=x.lightMap,p.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,p.lightMapTransform)),x.aoMap&&(p.aoMap.value=x.aoMap,p.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,p.aoMapTransform))}function o(p,x){p.diffuse.value.copy(x.color),p.opacity.value=x.opacity,x.map&&(p.map.value=x.map,e(x.map,p.mapTransform))}function l(p,x){p.dashSize.value=x.dashSize,p.totalSize.value=x.dashSize+x.gapSize,p.scale.value=x.scale}function a(p,x,T,L){p.diffuse.value.copy(x.color),p.opacity.value=x.opacity,p.size.value=x.size*T,p.scale.value=L*.5,x.map&&(p.map.value=x.map,e(x.map,p.uvTransform)),x.alphaMap&&(p.alphaMap.value=x.alphaMap,e(x.alphaMap,p.alphaMapTransform)),x.alphaTest>0&&(p.alphaTest.value=x.alphaTest)}function c(p,x){p.diffuse.value.copy(x.color),p.opacity.value=x.opacity,p.rotation.value=x.rotation,x.map&&(p.map.value=x.map,e(x.map,p.mapTransform)),x.alphaMap&&(p.alphaMap.value=x.alphaMap,e(x.alphaMap,p.alphaMapTransform)),x.alphaTest>0&&(p.alphaTest.value=x.alphaTest)}function u(p,x){p.specular.value.copy(x.specular),p.shininess.value=Math.max(x.shininess,1e-4)}function h(p,x){x.gradientMap&&(p.gradientMap.value=x.gradientMap)}function f(p,x){p.metalness.value=x.metalness,x.metalnessMap&&(p.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,p.metalnessMapTransform)),p.roughness.value=x.roughness,x.roughnessMap&&(p.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,p.roughnessMapTransform)),x.envMap&&(p.envMapIntensity.value=x.envMapIntensity)}function m(p,x,T){p.ior.value=x.ior,x.sheen>0&&(p.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),p.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(p.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,p.sheenColorMapTransform)),x.sheenRoughnessMap&&(p.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,p.sheenRoughnessMapTransform))),x.clearcoat>0&&(p.clearcoat.value=x.clearcoat,p.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(p.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,p.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(p.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Mn&&p.clearcoatNormalScale.value.negate())),x.dispersion>0&&(p.dispersion.value=x.dispersion),x.retroreflectivity>0&&(p.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(p.iridescence.value=x.iridescence,p.iridescenceIOR.value=x.iridescenceIOR,p.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(p.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,p.iridescenceMapTransform)),x.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),x.transmission>0&&(p.transmission.value=x.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),x.transmissionMap&&(p.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,p.transmissionMapTransform)),p.thickness.value=x.thickness,x.thicknessMap&&(p.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=x.attenuationDistance,p.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(p.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(p.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=x.specularIntensity,p.specularColor.value.copy(x.specularColor),x.specularColorMap&&(p.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,p.specularColorMapTransform)),x.specularIntensityMap&&(p.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,x){x.matcap&&(p.matcap.value=x.matcap)}function v(p,x){let T=t.get(x).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ly(n,t,e,i){let s={},r={},o=[],l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function a(b,A){let E=A.program;i.uniformBlockBinding(b,E)}function c(b,A){let E=s[b.id];E===void 0&&(p(b),E=u(b),s[b.id]=E,b.addEventListener("dispose",T));let D=A.program;i.updateUBOMapping(b,D);let M=t.render.frame;r[b.id]!==M&&(f(b),r[b.id]=M)}function u(b){let A=h();b.__bindingPointIndex=A;let E=n.createBuffer(),D=b.__size,M=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,D,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,E),E}function h(){for(let b=0;b<l;b++)if(o.indexOf(b)===-1)return o.push(b),b;return ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let A=s[b.id],E=b.uniforms,D=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let M=0,w=E.length;M<w;M++){let C=E[M];if(Array.isArray(C))for(let N=0,X=C.length;N<X;N++)m(C[N],M,N,D);else m(C,M,0,D)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,A,E,D){if(v(b,A,E,D)===!0){let M=b.__offset,w=b.value;if(Array.isArray(w)){let C=0;for(let N=0;N<w.length;N++){let X=w[N],U=x(X);_(X,b.__data,C),typeof X!="number"&&typeof X!="boolean"&&!X.isMatrix3&&!ArrayBuffer.isView(X)&&(C+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(w,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,M,b.__data)}}function _(b,A,E){typeof b=="number"||typeof b=="boolean"?A[0]=b:b.isMatrix3?(A[0]=b.elements[0],A[1]=b.elements[1],A[2]=b.elements[2],A[3]=0,A[4]=b.elements[3],A[5]=b.elements[4],A[6]=b.elements[5],A[7]=0,A[8]=b.elements[6],A[9]=b.elements[7],A[10]=b.elements[8],A[11]=0):ArrayBuffer.isView(b)?A.set(new b.constructor(b.buffer,b.byteOffset,A.length)):b.toArray(A,E)}function v(b,A,E,D){let M=b.value,w=A+"_"+E;if(D[w]===void 0)return typeof M=="number"||typeof M=="boolean"?D[w]=M:ArrayBuffer.isView(M)?D[w]=M.slice():D[w]=M.clone(),!0;{let C=D[w];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return D[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(C.equals(M)===!1)return C.copy(M),!0}}return!1}function p(b){let A=b.uniforms,E=0,D=16;for(let w=0,C=A.length;w<C;w++){let N=Array.isArray(A[w])?A[w]:[A[w]];for(let X=0,U=N.length;X<U;X++){let P=N[X],k=Array.isArray(P.value)?P.value:[P.value];for(let Z=0,K=k.length;Z<K;Z++){let st=k[Z],O=x(st),ot=E%D,it=ot%O.boundary,Mt=ot+it;E+=it,Mt!==0&&D-Mt<O.storage&&(E+=D-Mt),P.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=E,E+=O.storage}}}let M=E%D;return M>0&&(E+=D-M),b.__size=E,b.__cache={},this}function x(b){let A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(A.boundary=16,A.storage=b.byteLength):te("WebGLRenderer: Unsupported uniform value type.",b),A}function T(b){let A=b.target;A.removeEventListener("dispose",T);let E=o.indexOf(A.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function L(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:a,update:c,dispose:L}}var Dy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),di=null;function Ny(){return di===null&&(di=new ya(Dy,16,16,Qi,jn),di.name="DFG_LUT",di.minFilter=je,di.magFilter=je,di.wrapS=oi,di.wrapT=oi,di.generateMipmaps=!1,di.needsUpdate=!0),di}var Pl=class{constructor(t={}){let{canvas:e=jf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Nn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;let v=m,p=new Set([$a,Ya,qa]),x=new Set([Nn,Jn,tr,er,Wa,Xa]),T=new Uint32Array(4),L=new Int32Array(4),b=new J,A=null,E=null,D=[],M=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,X=null,U=null,P=null,k=null;this._outputColorSpace=on;let Z=0,K=0,st=null,O=-1,ot=null,it=new He,Mt=new He,gt=null,vt=new ie(0),bt=0,_t=e.width,$=e.height,nt=1,xt=null,Lt=null,ft=new He(0,0,_t,$),Ft=new He(0,0,_t,$),jt=!1,Ht=new Or,Zt=!1,ae=!1,Wt=new ke,ee=new J,Se=new He,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ee=!1;function Le(){return st===null?nt:1}let H=i;function Fe(S,G){return e.getContext(S,G)}let _e,I,y,Y,j,at,St,Et,ct,ht,Tt,qt,Pt,Rt,Xt,Jt,se,V,At,q,lt,Nt,ut;try{let S={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",Cn,!1),H===null){let G="webgl2";if(H=Fe(G,S),H===null)throw Fe(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(S){throw e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",Cn,!1),ne("WebGLRenderer: "+S.message),S}function Yt(){_e=new Vx(H),_e.init(),lt=new Ty(H,_e),I=new Px(H,_e,t,lt),y=new Ey(H,_e),I.reversedDepthBuffer&&f&&y.buffers.depth.setReversed(!0),U=H.createFramebuffer(),P=H.createFramebuffer(),k=H.createFramebuffer(),Y=new Wx(H),j=new uy,at=new Ay(H,_e,y,j,I,lt,Y),St=new kx(C),Et=new qm(H),Nt=new Cx(H,Et),ct=new Gx(H,Et,Y,Nt),ht=new qx(H,ct,Et,Nt,Y),V=new Xx(H,I,at),Xt=new Lx(j),Tt=new hy(C,St,_e,I,Nt,Xt),qt=new Py(C,j),Pt=new dy,Rt=new yy(_e),se=new Rx(C,St,y,ht,_,a),Jt=new wy(C,ht,I),ut=new Ly(H,Y,I,y),At=new Ix(H,_e,Y),q=new Hx(H,_e,Y),Y.programs=Tt.programs,C.capabilities=I,C.extensions=_e,C.properties=j,C.renderLists=Pt,C.shadowMap=Jt,C.state=y,C.info=Y}v!==Nn&&(w=new $x(v,e.width,e.height,l,s,r));let zt=new Ch(C,H);this.xr=zt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let S=_e.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=_e.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(S){S!==void 0&&(nt=S,this.setSize(_t,$,!1))},this.getSize=function(S){return S.set(_t,$)},this.setSize=function(S,G,rt=!0){if(zt.isPresenting){te("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=S,$=G,e.width=Math.floor(S*nt),e.height=Math.floor(G*nt),rt===!0&&(e.style.width=S+"px",e.style.height=G+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,S,G)},this.getDrawingBufferSize=function(S){return S.set(_t*nt,$*nt).floor()},this.setDrawingBufferSize=function(S,G,rt){_t=S,$=G,nt=rt,e.width=Math.floor(S*rt),e.height=Math.floor(G*rt),this.setViewport(0,0,S,G)},this.setEffects=function(S){if(v===Nn){ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let G=0;G<S.length;G++)if(S[G].isOutputPass===!0){te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(it)},this.getViewport=function(S){return S.copy(ft)},this.setViewport=function(S,G,rt,tt){S.isVector4?ft.set(S.x,S.y,S.z,S.w):ft.set(S,G,rt,tt),y.viewport(it.copy(ft).multiplyScalar(nt).round())},this.getScissor=function(S){return S.copy(Ft)},this.setScissor=function(S,G,rt,tt){S.isVector4?Ft.set(S.x,S.y,S.z,S.w):Ft.set(S,G,rt,tt),y.scissor(Mt.copy(Ft).multiplyScalar(nt).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(S){y.setScissorTest(jt=S)},this.setOpaqueSort=function(S){xt=S},this.setTransparentSort=function(S){Lt=S},this.getClearColor=function(S){return S.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(S=!0,G=!0,rt=!0){let tt=0;if(S){let Q=!1;if(st!==null){let Ct=st.texture.format;Q=p.has(Ct)}if(Q){let Ct=st.texture.type,Bt=x.has(Ct),It=se.getClearColor(),kt=se.getClearAlpha(),Gt=It.r,ce=It.g,ue=It.b;Bt?(T[0]=Gt,T[1]=ce,T[2]=ue,T[3]=kt,H.clearBufferuiv(H.COLOR,0,T)):(L[0]=Gt,L[1]=ce,L[2]=ue,L[3]=kt,H.clearBufferiv(H.COLOR,0,L))}else tt|=H.COLOR_BUFFER_BIT}G&&(tt|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(tt|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&H.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),X=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",Cn,!1),se.dispose(),Pt.dispose(),Rt.dispose(),j.dispose(),St.dispose(),ht.dispose(),Nt.dispose(),ut.dispose(),Tt.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",is),zt.removeEventListener("sessionend",Ii),ni.stop()};function Ie(S){S.preventDefault(),Ir("WebGLRenderer: Context Lost."),N=!0}function be(){Ir("WebGLRenderer: Context Restored."),N=!1;let S=Y.autoReset,G=Jt.enabled,rt=Jt.autoUpdate,tt=Jt.needsUpdate,Q=Jt.type;Yt(),Y.autoReset=S,Jt.enabled=G,Jt.autoUpdate=rt,Jt.needsUpdate=tt,Jt.type=Q}function Cn(S){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function me(S){let G=S.target;G.removeEventListener("dispose",me),vo(G)}function vo(S){tc(S),j.remove(S)}function tc(S){let G=j.get(S).programs;G!==void 0&&(G.forEach(function(rt){Tt.releaseProgram(rt)}),S.isShaderMaterial&&Tt.releaseShaderCache(S))}this.renderBufferDirect=function(S,G,rt,tt,Q,Ct){G===null&&(G=Xe);let Bt=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,It=ec(S,G,rt,tt,Q);y.setMaterial(tt,Bt);let kt=rt.index,Gt=1;if(tt.wireframe===!0){if(kt=ct.getWireframeAttribute(rt),kt===void 0)return;Gt=2}let ce=rt.drawRange,ue=rt.attributes.position,Ut=ce.start*Gt,Qt=(ce.start+ce.count)*Gt;Ct!==null&&(Ut=Math.max(Ut,Ct.start*Gt),Qt=Math.min(Qt,(Ct.start+Ct.count)*Gt)),kt!==null?(Ut=Math.max(Ut,0),Qt=Math.min(Qt,kt.count)):ue!=null&&(Ut=Math.max(Ut,0),Qt=Math.min(Qt,ue.count));let Ve=Qt-Ut;if(Ve<0||Ve===1/0)return;Nt.setup(Q,tt,It,rt,kt);let De,Re=At;if(kt!==null&&(De=Et.get(kt),Re=q,Re.setIndex(De)),Q.isMesh)tt.wireframe===!0?(y.setLineWidth(tt.wireframeLinewidth*Le()),Re.setMode(H.LINES)):Re.setMode(H.TRIANGLES);else if(Q.isLine){let Oe=tt.linewidth;Oe===void 0&&(Oe=1),y.setLineWidth(Oe*Le()),Q.isLineSegments?Re.setMode(H.LINES):Q.isLineLoop?Re.setMode(H.LINE_LOOP):Re.setMode(H.LINE_STRIP)}else Q.isPoints?Re.setMode(H.POINTS):Q.isSprite&&Re.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))Re.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let Oe=Q._multiDrawStarts,Ot=Q._multiDrawCounts,Je=Q._multiDrawCount,ge=kt?Et.get(kt).bytesPerElement:1,un=j.get(tt).currentProgram.getUniforms();for(let Ze=0;Ze<Je;Ze++)un.setValue(H,"_gl_DrawID",Ze),Re.render(Oe[Ze]/ge,Ot[Ze])}else if(Q.isInstancedMesh)Re.renderInstances(Ut,Ve,Q.count);else if(rt.isInstancedBufferGeometry){let Oe=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ot=Math.min(rt.instanceCount,Oe);Re.renderInstances(Ut,Ve,Ot)}else Re.render(Ut,Ve)};function Ss(S,G,rt,tt){X!==null&&S.isNodeMaterial&&X.setObject(tt,S),Zt===!0&&Xt.setState(S,rt,!1),S.transparent===!0&&S.side===zn&&S.forceSinglePass===!1?(S.side=Mn,S.needsUpdate=!0,gi(S,G,tt),S.side=Zi,S.needsUpdate=!0,gi(S,G,tt),S.side=zn):gi(S,G,tt)}this.compile=function(S,G,rt=null){rt===null&&(rt=S),X!==null&&X.renderStart(S,G,rt),E=Rt.get(rt),E.init(G),M.push(E),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(E.pushLight(Q),Q.castShadow&&E.pushShadow(Q))}),S!==rt&&S.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(E.pushLight(Q),Q.castShadow&&E.pushShadow(Q))}),E.setupLights(),X!==null&&X.updateLights(E.state.lightsArray),ae=this.localClippingEnabled,Zt=Xt.init(this.clippingPlanes,ae),Zt===!0&&Xt.setGlobalState(this.clippingPlanes,G),X!==null&&Jt.render(E.state.shadowsArray,rt,G);let tt=new Set;return S.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Ct=Q.material;if(Ct)if(Array.isArray(Ct))for(let Bt=0;Bt<Ct.length;Bt++){let It=Ct[Bt];Ss(It,rt,G,Q),tt.add(It)}else Ss(Ct,rt,G,Q),tt.add(Ct)}),E=M.pop(),X!==null&&X.renderEnd(),tt},this.compileAsync=function(S,G,rt=null){let tt=this.compile(S,G,rt);return new Promise(Q=>{function Ct(){if(tt.forEach(function(Bt){let kt=j.get(Bt).currentProgram;(kt===void 0||kt.isReady())&&tt.delete(Bt)}),tt.size===0){Q(S);return}setTimeout(Ct,10)}_e.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let dr=null;function Gn(S){dr&&dr(S)}function is(){ni.stop()}function Ii(){ni.start()}let ni=new Rd;ni.setAnimationLoop(Gn),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(S){dr=S,zt.setAnimationLoop(S),S===null?ni.stop():ni.start()},zt.addEventListener("sessionstart",is),zt.addEventListener("sessionend",Ii),this.render=function(S,G){if(G!==void 0&&G.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;X!==null&&X.renderStart(S,G);let rt=zt.enabled===!0&&zt.isPresenting===!0,tt=w!==null&&(st===null||rt)&&w.begin(C,st);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(G),G=zt.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,G,st),E=Rt.get(S,M.length),E.init(G),E.state.textureUnits=at.getTextureUnits(),M.push(E),Wt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ht.setFromProjectionMatrix(Wt,$n,G.reversedDepth),ae=this.localClippingEnabled,Zt=Xt.init(this.clippingPlanes,ae),A=Pt.get(S,D.length),A.init(),D.push(A),zt.enabled===!0&&zt.isPresenting===!0){let Bt=C.xr.getDepthSensingMesh();Bt!==null&&bs(Bt,G,-1/0,C.sortObjects)}bs(S,G,0,C.sortObjects),A.finish(),X!==null&&X.updateLights(E.state.lightsArray),C.sortObjects===!0&&A.sort(xt,Lt),Ee=zt.enabled===!1||zt.isPresenting===!1||zt.hasDepthSensing()===!1,Ee&&se.addToRenderList(A,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Zt===!0&&Xt.beginShadows();let Q=E.state.shadowsArray;if(Jt.render(Q,S,G),Zt===!0&&Xt.endShadows(),(tt&&w.hasRenderPass())===!1){let Bt=A.opaque,It=A.transmissive;if(E.setupLights(),G.isArrayCamera){let kt=G.cameras;if(It.length>0)for(let Gt=0,ce=kt.length;Gt<ce;Gt++){let ue=kt[Gt];Mo(Bt,It,S,ue)}Ee&&se.render(S);for(let Gt=0,ce=kt.length;Gt<ce;Gt++){let ue=kt[Gt];Pi(A,S,ue,ue.viewport)}}else It.length>0&&Mo(Bt,It,S,G),Ee&&se.render(S),Pi(A,S,G)}st!==null&&K===0&&(at.updateMultisampleRenderTarget(st),at.updateRenderTargetMipmap(st)),tt&&w.end(C),S.isScene===!0&&S.onAfterRender(C,S,G),Nt.resetDefaultState(),O=-1,ot=null,M.pop(),M.length>0?(E=M[M.length-1],at.setTextureUnits(E.state.textureUnits),Zt===!0&&Xt.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,D.pop(),D.length>0?A=D[D.length-1]:A=null,X!==null&&X.renderEnd()};function bs(S,G,rt,tt){if(S.visible===!1)return;if(S.layers.test(G.layers)){if(S.isGroup)rt=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(G);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Ht)){tt&&Se.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Wt);let Bt=ht.update(S),It=S.material;It.visible&&A.push(S,Bt,It,rt,Se.z,null,G)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Ht))){let Bt=ht.update(S),It=S.material;if(tt&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Se.copy(S.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),Se.copy(Bt.boundingSphere.center)),Se.applyMatrix4(S.matrixWorld).applyMatrix4(Wt)),Array.isArray(It)){let kt=Bt.groups;for(let Gt=0,ce=kt.length;Gt<ce;Gt++){let ue=kt[Gt],Ut=It[ue.materialIndex];Ut&&Ut.visible&&A.push(S,Bt,Ut,rt,Se.z,ue,G)}}else It.visible&&A.push(S,Bt,It,rt,Se.z,null,G)}}let Ct=S.children;for(let Bt=0,It=Ct.length;Bt<It;Bt++)bs(Ct[Bt],G,rt,tt)}function Pi(S,G,rt,tt){let{opaque:Q,transmissive:Ct,transparent:Bt}=S;E.setupLightsView(rt),Zt===!0&&Xt.setGlobalState(C.clippingPlanes,rt),tt&&y.viewport(it.copy(tt)),Q.length>0&&ws(Q,G,rt),Ct.length>0&&ws(Ct,G,rt),Bt.length>0&&ws(Bt,G,rt),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Mo(S,G,rt,tt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[tt.id]===void 0){let Ut=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[tt.id]=new wn(1,1,{generateMipmaps:!0,type:Ut?jn:Nn,minFilter:Ki,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xe.workingColorSpace})}let Ct=E.state.transmissionRenderTarget[tt.id],Bt=tt.viewport||it;Ct.setSize(Bt.z*C.transmissionResolutionScale,Bt.w*C.transmissionResolutionScale);let It=C.getRenderTarget(),kt=C.getActiveCubeFace(),Gt=C.getActiveMipmapLevel();C.setRenderTarget(Ct),C.getClearColor(vt),bt=C.getClearAlpha(),bt<1&&C.setClearColor(16777215,.5),C.clear(),Ee&&se.render(rt);let ce=C.toneMapping;C.toneMapping=Zn;let ue=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),E.setupLightsView(tt),Zt===!0&&Xt.setGlobalState(C.clippingPlanes,tt),ws(S,rt,tt),at.updateMultisampleRenderTarget(Ct),at.updateRenderTargetMipmap(Ct),_e.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let Qt=0,Ve=G.length;Qt<Ve;Qt++){let De=G[Qt],{object:Re,geometry:Oe,material:Ot,group:Je}=De;if(Ot.side===zn&&Re.layers.test(tt.layers)){let ge=Ot.side;Ot.side=Mn,Ot.needsUpdate=!0,Es(Re,rt,tt,Oe,Ot,Je),Ot.side=ge,Ot.needsUpdate=!0,Ut=!0}}Ut===!0&&(at.updateMultisampleRenderTarget(Ct),at.updateRenderTargetMipmap(Ct))}C.setRenderTarget(It,kt,Gt),C.setClearColor(vt,bt),ue!==void 0&&(tt.viewport=ue),C.toneMapping=ce}function ws(S,G,rt){let tt=G.isScene===!0?G.overrideMaterial:null;for(let Q=0,Ct=S.length;Q<Ct;Q++){let Bt=S[Q],{object:It,geometry:kt,group:Gt}=Bt,ce=Bt.material;ce.allowOverride===!0&&tt!==null&&(ce=tt),It.layers.test(rt.layers)&&Es(It,G,rt,kt,ce,Gt)}}function Es(S,G,rt,tt,Q,Ct){X!==null&&Q.isNodeMaterial&&X.setObject(S,Q),S.onBeforeRender(C,G,rt,tt,Q,Ct),S.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Q.onBeforeRender(C,G,rt,tt,S,Ct),Q.transparent===!0&&Q.side===zn&&Q.forceSinglePass===!1?(Q.side=Mn,Q.needsUpdate=!0,C.renderBufferDirect(rt,G,tt,Q,S,Ct),Q.side=Zi,Q.needsUpdate=!0,C.renderBufferDirect(rt,G,tt,Q,S,Ct),Q.side=zn):C.renderBufferDirect(rt,G,tt,Q,S,Ct),S.onAfterRender(C,G,rt,tt,Q,Ct)}function gi(S,G,rt){G.isScene!==!0&&(G=Xe);let tt=j.get(S),Q=E.state.lights,Ct=E.state.shadowsArray,Bt=Q.state.version,It=Tt.getParameters(S,Q.state,Ct,G,rt,E.state.lightProbeGridArray),kt=Tt.getProgramCacheKey(It),Gt=tt.programs;tt.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?G.environment:null,tt.fog=G.fog;let ce=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;tt.envMap=St.get(S.envMap||tt.environment,ce),tt.envMapRotation=tt.environment!==null&&S.envMap===null?G.environmentRotation:S.envMapRotation,Gt===void 0&&(S.addEventListener("dispose",me),Gt=new Map,tt.programs=Gt);let ue=Gt.get(kt);if(ue!==void 0){if(tt.currentProgram===ue&&tt.lightsStateVersion===Bt)return So(S,It),ue}else It.uniforms=Tt.getUniforms(S),X!==null&&S.isNodeMaterial&&X.build(S,rt,It),S.onBeforeCompile(It,C),ue=Tt.acquireProgram(It,kt),Gt.set(kt,ue),tt.uniforms=It.uniforms;let Ut=tt.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ut.clippingPlanes=Xt.uniform),So(S,It),tt.needsLights=Ts(S),tt.lightsStateVersion=Bt,tt.needsLights&&(Ut.ambientLightColor.value=Q.state.ambient,Ut.lightProbe.value=Q.state.probe,Ut.sunLights.value=Q.state.sun,Ut.sunLightShadows.value=Q.state.sunShadow,Ut.directionalLights.value=Q.state.directional,Ut.directionalLightShadows.value=Q.state.directionalShadow,Ut.spotLights.value=Q.state.spot,Ut.spotLightShadows.value=Q.state.spotShadow,Ut.rectAreaLights.value=Q.state.rectArea,Ut.ltc_1.value=Q.state.rectAreaLTC1,Ut.ltc_2.value=Q.state.rectAreaLTC2,Ut.pointLights.value=Q.state.point,Ut.pointLightShadows.value=Q.state.pointShadow,Ut.hemisphereLights.value=Q.state.hemi,Ut.sunShadowMatrix.value=Q.state.sunShadowMatrix,Ut.sunShadowCascade.value=Q.state.sunShadowCascade,Ut.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ut.spotLightMatrix.value=Q.state.spotLightMatrix,Ut.spotLightMap.value=Q.state.spotLightMap,Ut.pointShadowMatrix.value=Q.state.pointShadowMatrix),tt.lightProbeGrid=E.state.lightProbeGridArray.length>0,tt.currentProgram=ue,tt.uniformsList=null,ue}function Li(S){if(S.uniformsList===null){let G=S.currentProgram.getUniforms();S.uniformsList=sr.seqWithValue(G.seq,S.uniforms)}return S.uniformsList}function So(S,G){let rt=j.get(S);rt.outputColorSpace=G.outputColorSpace,rt.batching=G.batching,rt.batchingColor=G.batchingColor,rt.instancing=G.instancing,rt.instancingColor=G.instancingColor,rt.instancingMorph=G.instancingMorph,rt.skinning=G.skinning,rt.morphTargets=G.morphTargets,rt.morphNormals=G.morphNormals,rt.morphColors=G.morphColors,rt.morphTargetsCount=G.morphTargetsCount,rt.numClippingPlanes=G.numClippingPlanes,rt.numIntersection=G.numClipIntersection,rt.vertexAlphas=G.vertexAlphas,rt.vertexTangents=G.vertexTangents,rt.toneMapping=G.toneMapping}function bo(S,G){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;b.setFromMatrixPosition(G.matrixWorld);for(let rt=0,tt=S.length;rt<tt;rt++){let Q=S[rt];if(Q.texture!==null&&Q.boundingBox.containsPoint(b))return Q}return null}function ec(S,G,rt,tt,Q){G.isScene!==!0&&(G=Xe),at.resetTextureUnits();let Ct=G.fog,Bt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?G.environment:null,It=st===null?C.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:xe.workingColorSpace,kt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,Gt=St.get(tt.envMap||Bt,kt),ce=tt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ue=!!rt.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Ut=!!rt.morphAttributes.position,Qt=!!rt.morphAttributes.normal,Ve=!!rt.morphAttributes.color,De=Zn;tt.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(De=C.toneMapping);let Re=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Oe=Re!==void 0?Re.length:0,Ot=j.get(tt),Je=E.state.lights;if(Zt===!0&&(ae===!0||S!==ot)){let we=S===ot&&tt.id===O;Xt.setState(tt,S,we)}let ge=!1;tt.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Je.state.version||Ot.outputColorSpace!==It||Q.isBatchedMesh&&Ot.batching===!1||!Q.isBatchedMesh&&Ot.batching===!0||Q.isBatchedMesh&&Ot.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Ot.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Ot.instancing===!1||!Q.isInstancedMesh&&Ot.instancing===!0||Q.isSkinnedMesh&&Ot.skinning===!1||!Q.isSkinnedMesh&&Ot.skinning===!0||Q.isInstancedMesh&&Ot.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ot.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ot.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ot.instancingMorph===!1&&Q.morphTexture!==null||Ot.envMap!==Gt||tt.fog===!0&&Ot.fog!==Ct||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==Xt.numPlanes||Ot.numIntersection!==Xt.numIntersection)||Ot.vertexAlphas!==ce||Ot.vertexTangents!==ue||Ot.morphTargets!==Ut||Ot.morphNormals!==Qt||Ot.morphColors!==Ve||Ot.toneMapping!==De||Ot.morphTargetsCount!==Oe||!!Ot.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ge=!0):(ge=!0,Ot.__version=tt.version);let un=Ot.currentProgram;ge===!0&&(un=gi(tt,G,Q),X&&tt.isNodeMaterial&&X.onUpdateProgram(tt,un,Ot));let Ze=!1,sn=!1,Di=!1,Ae=un.getUniforms(),Ge=Ot.uniforms;if(y.useProgram(un.program)&&(Ze=!0,sn=!0,Di=!0),tt.id!==O&&(O=tt.id,sn=!0),Ot.needsLights){let we=bo(E.state.lightProbeGridArray,Q);Ot.lightProbeGrid!==we&&(Ot.lightProbeGrid=we,sn=!0)}if(Ze||ot!==S){y.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Ae.setValue(H,"projectionMatrix",S.projectionMatrix),Ae.setValue(H,"viewMatrix",S.matrixWorldInverse);let Hn=Ae.map.cameraPosition;Hn!==void 0&&Hn.setValue(H,ee.setFromMatrixPosition(S.matrixWorld)),I.logarithmicDepthBuffer&&Ae.setValue(H,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Ae.setValue(H,"isOrthographic",S.isOrthographicCamera===!0),ot!==S&&(ot=S,sn=!0,Di=!0)}if(Ot.needsLights&&(Je.state.sunShadowMap.length>0&&Ae.setValue(H,"sunShadowMap",Je.state.sunShadowMap,at),Je.state.directionalShadowMap.length>0&&Ae.setValue(H,"directionalShadowMap",Je.state.directionalShadowMap,at),Je.state.spotShadowMap.length>0&&Ae.setValue(H,"spotShadowMap",Je.state.spotShadowMap,at),Je.state.pointShadowMap.length>0&&Ae.setValue(H,"pointShadowMap",Je.state.pointShadowMap,at)),Q.isSkinnedMesh){Ae.setOptional(H,Q,"bindMatrix"),Ae.setOptional(H,Q,"bindMatrixInverse");let we=Q.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),Ae.setValue(H,"boneTexture",we.boneTexture,at))}Q.isBatchedMesh&&(Ae.setOptional(H,Q,"batchingTexture"),Ae.setValue(H,"batchingTexture",Q._matricesTexture,at),Ae.setOptional(H,Q,"batchingIdTexture"),Ae.setValue(H,"batchingIdTexture",Q._indirectTexture,at),Ae.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ae.setValue(H,"batchingColorTexture",Q._colorsTexture,at));let bn=rt.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&V.update(Q,rt,un),(sn||Ot.receiveShadow!==Q.receiveShadow)&&(Ot.receiveShadow=Q.receiveShadow,Ae.setValue(H,"receiveShadow",Q.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&G.environment!==null&&(Ge.envMapIntensity.value=G.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=Ny()),sn){if(Ae.setValue(H,"toneMappingExposure",C.toneMappingExposure),Ot.needsLights&&As(Ge,Di),Ct&&tt.fog===!0&&qt.refreshFogUniforms(Ge,Ct),qt.refreshMaterialUniforms(Ge,tt,nt,$,E.state.transmissionRenderTarget[S.id]),Ot.needsLights&&Ot.lightProbeGrid){let we=Ot.lightProbeGrid;Ge.probesSH.value=we.texture,Ge.probesMin.value.copy(we.boundingBox.min),Ge.probesMax.value.copy(we.boundingBox.max),Ge.probesResolution.value.copy(we.resolution)}sr.upload(H,Li(Ot),Ge,at)}if(tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(sr.upload(H,Li(Ot),Ge,at),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Ae.setValue(H,"center",Q.center),Ae.setValue(H,"modelViewMatrix",Q.modelViewMatrix),Ae.setValue(H,"normalMatrix",Q.normalMatrix),Ae.setValue(H,"modelMatrix",Q.matrixWorld),tt.uniformsGroups!==void 0){let we=tt.uniformsGroups;for(let Hn=0,Ni=we.length;Hn<Ni;Hn++){let mr=we[Hn];ut.update(mr,un),ut.bind(mr,un)}}return un}function As(S,G){S.ambientLightColor.needsUpdate=G,S.lightProbe.needsUpdate=G,S.sunLights.needsUpdate=G,S.sunLightShadows.needsUpdate=G,S.directionalLights.needsUpdate=G,S.directionalLightShadows.needsUpdate=G,S.pointLights.needsUpdate=G,S.pointLightShadows.needsUpdate=G,S.spotLights.needsUpdate=G,S.spotLightShadows.needsUpdate=G,S.rectAreaLights.needsUpdate=G,S.hemisphereLights.needsUpdate=G}function Ts(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(S,G,rt){let tt=j.get(S);tt.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),j.get(S.texture).__webglTexture=G,j.get(S.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:rt,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,G){let rt=j.get(S);rt.__webglFramebuffer=G,rt.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(S,G=0,rt=0){st=S,Z=G,K=rt;let tt=null,Q=!1,Ct=!1;if(S){let It=j.get(S);if(It.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(H.FRAMEBUFFER,It.__webglFramebuffer),it.copy(S.viewport),Mt.copy(S.scissor),gt=S.scissorTest,y.viewport(it),y.scissor(Mt),y.setScissorTest(gt),O=-1;return}else if(It.__webglFramebuffer===void 0)at.setupRenderTarget(S);else if(It.__hasExternalTextures)at.rebindTextures(S,j.get(S.texture).__webglTexture,j.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let ce=S.depthTexture;if(It.__boundDepthTexture!==ce){if(ce!==null&&j.has(ce)&&(S.width!==ce.image.width||S.height!==ce.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(S)}}let kt=S.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Ct=!0);let Gt=j.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Gt[G])?tt=Gt[G][rt]:tt=Gt[G],Q=!0):S.samples>0&&at.useMultisampledRTT(S)===!1?tt=j.get(S).__webglMultisampledFramebuffer:Array.isArray(Gt)?tt=Gt[rt]:tt=Gt,it.copy(S.viewport),Mt.copy(S.scissor),gt=S.scissorTest}else it.copy(ft).multiplyScalar(nt).floor(),Mt.copy(Ft).multiplyScalar(nt).floor(),gt=jt;if(rt!==0&&(tt=U),y.bindFramebuffer(H.FRAMEBUFFER,tt)&&y.drawBuffers(S,tt),y.viewport(it),y.scissor(Mt),y.setScissorTest(gt),Q){let It=j.get(S.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+G,It.__webglTexture,rt)}else if(Ct){let It=G;for(let kt=0;kt<S.textures.length;kt++){let Gt=j.get(S.textures[kt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+kt,Gt.__webglTexture,rt,It)}}else if(S!==null&&rt!==0){let It=j.get(S.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,It.__webglTexture,rt)}O=-1};function pr(S){let G=j.get(S);return(G.__readFormat!==S.format||G.__readType!==S.type)&&(G.__readFormat=S.format,G.__readType=S.type,G.__formatReadable=I.textureFormatReadable(S.format),G.__typeReadable=I.textureTypeReadable(S.type)),G}this.readRenderTargetPixels=function(S,G,rt,tt,Q,Ct,Bt,It=0){if(!(S&&S.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=j.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Bt!==void 0&&(kt=kt[Bt]),kt){y.bindFramebuffer(H.FRAMEBUFFER,kt);try{let Gt=S.textures[It],ce=Gt.format,ue=Gt.type;S.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+It);let Ut=pr(Gt);if(Ut.__formatReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=S.width-tt&&rt>=0&&rt<=S.height-Q&&H.readPixels(G,rt,tt,Q,lt.convert(ce),lt.convert(ue),Ct)}finally{let Gt=st!==null?j.get(st).__webglFramebuffer:null;y.bindFramebuffer(H.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(S,G,rt,tt,Q,Ct,Bt,It=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=j.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Bt!==void 0&&(kt=kt[Bt]),kt)if(G>=0&&G<=S.width-tt&&rt>=0&&rt<=S.height-Q){y.bindFramebuffer(H.FRAMEBUFFER,kt);let Gt=S.textures[It],ce=Gt.format,ue=Gt.type;S.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+It);let Ut=pr(Gt);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Qt),H.bufferData(H.PIXEL_PACK_BUFFER,Ct.byteLength,H.STREAM_READ),H.readPixels(G,rt,tt,Q,lt.convert(ce),lt.convert(ue),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Ve=st!==null?j.get(st).__webglFramebuffer:null;y.bindFramebuffer(H.FRAMEBUFFER,Ve);let De=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await td(H,De,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Qt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ct),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Qt),H.deleteSync(De),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,G=null,rt=0){let tt=Math.pow(2,-rt),Q=Math.floor(S.image.width*tt),Ct=Math.floor(S.image.height*tt),Bt=G!==null?G.x:0,It=G!==null?G.y:0;at.setTexture2D(S,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,Bt,It,Q,Ct),y.unbindTexture()},this.copyTextureToTexture=function(S,G,rt=null,tt=null,Q=0,Ct=0){let Bt,It,kt,Gt,ce,ue,Ut,Qt,Ve,De=S.isCompressedTexture?S.mipmaps[Ct]:S.image;if(rt!==null)Bt=rt.max.x-rt.min.x,It=rt.max.y-rt.min.y,kt=rt.isBox3?rt.max.z-rt.min.z:1,Gt=rt.min.x,ce=rt.min.y,ue=rt.isBox3?rt.min.z:0;else{let Ge=Math.pow(2,-Q);Bt=Math.floor(De.width*Ge),It=Math.floor(De.height*Ge),S.isDataArrayTexture?kt=De.depth:S.isData3DTexture?kt=Math.floor(De.depth*Ge):kt=1,Gt=0,ce=0,ue=0}tt!==null?(Ut=tt.x,Qt=tt.y,Ve=tt.z):(Ut=0,Qt=0,Ve=0);let Re=lt.convert(G.format),Oe=lt.convert(G.type),Ot;G.isData3DTexture?(at.setTexture3D(G,0),Ot=H.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(at.setTexture2DArray(G,0),Ot=H.TEXTURE_2D_ARRAY):(at.setTexture2D(G,0),Ot=H.TEXTURE_2D),y.activeTexture(H.TEXTURE0),y.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),y.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),y.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment);let Je=y.getParameter(H.UNPACK_ROW_LENGTH),ge=y.getParameter(H.UNPACK_IMAGE_HEIGHT),un=y.getParameter(H.UNPACK_SKIP_PIXELS),Ze=y.getParameter(H.UNPACK_SKIP_ROWS),sn=y.getParameter(H.UNPACK_SKIP_IMAGES);y.pixelStorei(H.UNPACK_ROW_LENGTH,De.width),y.pixelStorei(H.UNPACK_IMAGE_HEIGHT,De.height),y.pixelStorei(H.UNPACK_SKIP_PIXELS,Gt),y.pixelStorei(H.UNPACK_SKIP_ROWS,ce),y.pixelStorei(H.UNPACK_SKIP_IMAGES,ue);let Di=S.isDataArrayTexture||S.isData3DTexture,Ae=G.isDataArrayTexture||G.isData3DTexture;if(S.isDepthTexture){let Ge=j.get(S),bn=j.get(G),we=j.get(Ge.__renderTarget),Hn=j.get(bn.__renderTarget);y.bindFramebuffer(H.READ_FRAMEBUFFER,we.__webglFramebuffer),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let Ni=0;Ni<kt;Ni++)Di&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,j.get(S).__webglTexture,Q,ue+Ni),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,j.get(G).__webglTexture,Ct,Ve+Ni)),H.blitFramebuffer(Gt,ce,Bt,It,Ut,Qt,Bt,It,H.DEPTH_BUFFER_BIT,H.NEAREST);y.bindFramebuffer(H.READ_FRAMEBUFFER,null),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||S.isRenderTargetTexture||j.has(S)){let Ge=j.get(S),bn=j.get(G);y.bindFramebuffer(H.READ_FRAMEBUFFER,P),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,k);for(let we=0;we<kt;we++)Di?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ge.__webglTexture,Q,ue+we):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ge.__webglTexture,Q),Ae?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,bn.__webglTexture,Ct,Ve+we):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,bn.__webglTexture,Ct),Q!==0?H.blitFramebuffer(Gt,ce,Bt,It,Ut,Qt,Bt,It,H.COLOR_BUFFER_BIT,H.NEAREST):Ae?H.copyTexSubImage3D(Ot,Ct,Ut,Qt,Ve+we,Gt,ce,Bt,It):H.copyTexSubImage2D(Ot,Ct,Ut,Qt,Gt,ce,Bt,It);y.bindFramebuffer(H.READ_FRAMEBUFFER,null),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ae?S.isDataTexture||S.isData3DTexture?H.texSubImage3D(Ot,Ct,Ut,Qt,Ve,Bt,It,kt,Re,Oe,De.data):G.isCompressedArrayTexture?H.compressedTexSubImage3D(Ot,Ct,Ut,Qt,Ve,Bt,It,kt,Re,De.data):H.texSubImage3D(Ot,Ct,Ut,Qt,Ve,Bt,It,kt,Re,Oe,De):S.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ct,Ut,Qt,Bt,It,Re,Oe,De.data):S.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ct,Ut,Qt,De.width,De.height,Re,De.data):H.texSubImage2D(H.TEXTURE_2D,Ct,Ut,Qt,Bt,It,Re,Oe,De);y.pixelStorei(H.UNPACK_ROW_LENGTH,Je),y.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ge),y.pixelStorei(H.UNPACK_SKIP_PIXELS,un),y.pixelStorei(H.UNPACK_SKIP_ROWS,Ze),y.pixelStorei(H.UNPACK_SKIP_IMAGES,sn),Ct===0&&G.generateMipmaps&&H.generateMipmap(Ot),y.unbindTexture()},this.initRenderTarget=function(S){j.get(S).__webglFramebuffer===void 0&&at.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?at.setTextureCube(S,0):S.isData3DTexture?at.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?at.setTexture2DArray(S,0):at.setTexture2D(S,0),y.unbindTexture()},this.resetState=function(){Z=0,K=0,st=null,y.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}};var Uy=["top","side","bottom"],Fy={slab_bottom:1,slab_top:1,stairs:1},Ud=[[0,.5,0,1,1,.5],[.5,.5,0,1,1,1],[0,.5,.5,1,1,1],[0,.5,0,.5,1,1]];function Oy(n){return!n||!n.shape?null:n.shape==="slab_bottom"?[[0,0,0,1,.5,1]]:n.shape==="slab_top"?[[0,.5,0,1,1,1]]:n.shape==="stairs"?[[0,0,0,1,.5,1],Ud[n.facing|0]]:null}function Fd(n){let t=n&&n.blocks||[],e=n&&n.items||[],i=new Array(256).fill(null),s=Object.create(null),r=[];for(let w of t){if(!w||typeof w.id!="string")throw new Error("block without id");if(!Number.isInteger(w.n)||w.n<0||w.n>255)throw new Error("bad n for "+w.id);if(i[w.n])throw new Error("duplicate n "+w.n+" ("+w.id+")");if(s[w.id])throw new Error("duplicate id "+w.id);let C=w.colors||{},N=Object.assign({solid:!0,transparent:!1,liquid:!1,emissive:!1,hardness:1,drops:"self",buy:null,maxStack:64,pattern:"plain",kind:"block"},w);if(N.placeable=N.n!==0&&!N.liquid,N.colors={top:C.top||"#888888",side:C.side||C.top||"#888888",bottom:C.bottom||C.top||"#888888"},N.opaque=N.solid&&!N.transparent&&!N.cutout&&!Fy[N.shape],N.tile={},N.tileOf&&s[N.tileOf])N.tile=Object.assign({},s[N.tileOf].tile);else if(N.n!==0){let X={};for(let U of Uy){let P=N.colors[U]+"|"+(N.pattern==="grass"||N.pattern==="log"||N.pattern==="lamp"||N.pattern==="table"||N.pattern==="stele"||N.pattern==="torch"||N.pattern==="bed"||N.pattern==="snow"||N.pattern==="lantern"||N.pattern==="bookshelf"||N.pattern==="hay"||N.pattern==="barrel"||N.pattern==="chest"||N.pattern==="farmland"?U:"");X[P]===void 0&&(X[P]=r.length,r.push({block:N.id,face:U,color:N.colors[U],pattern:N.pattern,accent:N.accent||null,top:N.colors.top})),N.tile[U]=X[P]}}i[N.n]=N,s[N.id]=N}if(!s.air)throw new Error("registry needs air");for(let w of e){if(s[w.id])throw new Error("duplicate id "+w.id);s[w.id]=Object.assign({kind:"item",placeable:!1,maxStack:64,buy:null},w)}for(let w in s){let C=s[w].drops;if(C&&C!=="self"&&!s[C])throw new Error(w+" drops unknown "+C)}let o=w=>(typeof w=="number"?i[w]:s[w])||null,l=new Uint8Array(256),a=new Uint8Array(256),c=new Uint8Array(256),u=new Uint8Array(256),h=new Uint8Array(256),f=new Uint8Array(256),m={torch:1,cross:2,small:3,carpet:4,slab_bottom:5,slab_top:6,stairs:7},_=new Uint8Array(256),v=new Array(256).fill(null),p=new Uint8Array(256),x=new Uint8Array(256),T=new Uint8Array(256),L=new Uint8Array(256),b=new Uint8Array(256),A=new Int16Array(256).fill(-1),E=new Int16Array(256).fill(-1),D=new Int16Array(256).fill(-1);i.forEach((w,C)=>{w&&(p[C]=w.solid?1:0,x[C]=w.opaque?1:0,T[C]=w.transparent?1:0,L[C]=w.emissive?1:0,b[C]=w.liquid?1:0,l[C]=w.light!=null?w.light:w.emissive?15:0,a[C]=w.liquid?2:0,c[C]=m[w.shape]||0,u[C]=w.cutout?1:0,h[C]=w.climbable?1:0,f[C]=w.plant?1:0,_[C]=w.facing|0,w.solid&&(v[C]=Oy(w)),C&&(A[C]=w.tile.top,E[C]=w.tile.side,D[C]=w.tile.bottom))});let M=(n&&n.blueprints||[]).map(w=>Object.assign({kind:"blueprint"},w));return{blocks:i.filter(Boolean),items:e.map(w=>s[w.id]),blueprints:M,tiles:r,get:o,toolOf:w=>{let C=w&&s[w];return C&&C.kind==="item"&&C.tool&&typeof C.tool=="object"?C.tool:null},num:w=>{let C=s[w];if(!C||C.kind!=="block")throw new Error("no block "+w);return C.n},name:w=>{let C=o(w);return C?C.name_zh:String(w)},maxStack:w=>{let C=s[w];return C?C.maxStack:64},dropOf:w=>{let C=i[w];return!C||!C.drops?null:C.drops==="self"?C.id:C.drops},breakTime:w=>{let C=i[w];return!C||C.hardness<0?1/0:.25+C.hardness*.55},flat:{solid:p,opaque:x,trans:T,emit:L,liquid:b,tileTop:A,tileSide:E,tileBottom:D,lightEmit:l,attn:a,shape:c,cutout:u,climb:h,plant:f,facing:_,boxes:v}}}var Ei=n=>Math.floor(n/16);var Te=(n,t,e)=>(t*16+e)*16+n;var xs=(n,t)=>n+","+t;function Ih(n,t,e){if(n=Math.floor(n),t=Math.floor(t),e=Math.floor(e),t<0||t>=64)return null;let i=Ei(n),s=Ei(e);return{cx:i,cz:s,i:Te(n-i*16,t,e-s*16)}}function Od(n,t,e){let i=[];for(let s=-e;s<=e;s++)for(let r=-e;r<=e;r++){let o=r*r+s*s;o<=e*e+e&&i.push({cx:n+r,cz:t+s,d2:o})}return i.sort((s,r)=>s.d2-r.d2)}function Qn(n,t,e,i){let s=(n|0)^Math.imul(t|0,668265261)^Math.imul(e|0,374761393)^Math.imul(i|0,2654435761);return s=Math.imul(s^s>>>15,2246822507),s=Math.imul(s^s>>>13,3266489909),s^=s>>>16,(s>>>0)/4294967296}var or=(n,t,e)=>Qn(n,t,0,e);function By(n){let t=n>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var Ph=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],zy=.5*(Math.sqrt(3)-1),so=(3-Math.sqrt(3))/6;function _s(n){let t=By(n),e=new Uint8Array(256);for(let s=0;s<256;s++)e[s]=s;for(let s=255;s>0;s--){let r=Math.floor(t()*(s+1)),o=e[s];e[s]=e[r],e[r]=o}let i=new Uint8Array(512);for(let s=0;s<512;s++)i[s]=e[s&255];return function(s,r){let o=(s+r)*zy,l=Math.floor(s+o),a=Math.floor(r+o),c=(l+a)*so,u=s-(l-c),h=r-(a-c),f=u>h?1:0,m=1-f,_=u-f+so,v=h-m+so,p=u-1+2*so,x=h-1+2*so,T=l&255,L=a&255,b=0,A,E;return A=.5-u*u-h*h,A>0&&(E=Ph[i[T+i[L]]&7],A*=A,b+=A*A*(E[0]*u+E[1]*h)),A=.5-_*_-v*v,A>0&&(E=Ph[i[T+f+i[L+m]]&7],A*=A,b+=A*A*(E[0]*_+E[1]*v)),A=.5-p*p-x*x,A>0&&(E=Ph[i[T+1+i[L+1]]&7],A*=A,b+=A*A*(E[0]*p+E[1]*x)),70*b}}function ys(n,t,e,i){let s=1,r=1,o=0,l=0;for(let a=0;a<i;a++)o+=s*n(t*r,e*r),l+=s,s*=.5,r*=2;return o/l}function Lh(n){let t=e=>e*e*(3-2*e);return function(e,i,s){let r=Math.floor(e),o=Math.floor(i),l=Math.floor(s),a=t(e-r),c=t(i-o),u=t(s-l),h=(m,_,v)=>Qn(n,r+m,o+_,l+v),f=(m,_,v)=>m+(_-m)*v;return f(f(f(h(0,0,0),h(1,0,0),a),f(h(0,1,0),h(1,1,0),a),c),f(f(h(0,0,1),h(1,0,1),a),f(h(0,1,1),h(1,1,1),a),c),u)}}var ar=160,ti=18,Dh=[[0,1],[-1,0],[0,-1],[1,0]];function Bd(n,t,e,i,s){return s===1?[i-1-t,n]:s===2?[e-1-n,i-1-t]:s===3?[t,e-1-n]:[n,t]}var ky=(n,t,e)=>e&1?[t,n]:[n,t];function zd(n,t,e){let i=new Map,s=t.SEA,r=e&&e.templates||{};function o(a,c){let u=a+","+c;if(i.has(u))return i.get(u);let h=null,f=m=>Qn(n+909,a,m,c);if(f(0)<.45&&e&&e.houses&&e.houses.length){let m=Math.floor((a+.2+f(1)*.6)*ar),_=Math.floor((c+.2+f(2)*.6)*ar),v=t.biomeOf(m,_),p=t.height(m,_),x=(v==="plains"||v==="desert")&&Math.hypot(m,_)>110;if(x&&p>s+1)for(let T=0;T<16&&x;T++)for(let L of[7,14]){let b=t.height(m+Math.round(Math.cos(T*.39)*L),_+Math.round(Math.sin(T*.39)*L));(Math.abs(b-p)>3||b<=s)&&(x=!1)}else x=!1;if(x){let T=[],L=[],b=3+Math.floor(f(3)*4),A=(E,D,M,w)=>{let C=r[E];if(!C)return null;let[N,X]=ky(C.size[0],C.size[2],w),U={tpl:E,rot:w,x0:D-(N>>1),z0:M-(X>>1),y:p,w:N,d:X,h:C.size[1]};return T.push(U),U};A("well",m,_,0),A("lamp_post",m+3,_+3,0),A("lamp_post",m-3,_-3,0);for(let E=0;E<b;E++){let D=E/b*Math.PI*2+f(10+E)*.5,M=9+f(20+E)*3,w=m+Math.round(Math.cos(D)*M),C=_+Math.round(Math.sin(D)*M),N=m-w,X=_-C,U=0,P=-1/0;Dh.forEach((it,Mt)=>{let gt=it[0]*N+it[1]*X;gt>P&&(P=gt,U=Mt)});let k=e.houses[Math.floor(f(30+E)*e.houses.length)],Z=A(k,w,C,U);if(!Z)continue;let K=r[k],[st,O]=Bd(K.door[0],K.door[1],K.size[0],K.size[2],U),ot={x:Z.x0+st+Dh[U][0],z:Z.z0+O+Dh[U][1]};L.push({ax:m,az:_,bx:ot.x,bz:ot.z})}h={id:u,x:m,z:_,y:p,biome:v,structures:T,paths:L,villagers:2+Math.floor(f(4)*3)}}}return i.set(u,h),h}function l(a,c,u,h){let f=[];for(let m=Math.floor((c-ti)/ar);m<=Math.floor((h+ti)/ar);m++)for(let _=Math.floor((a-ti)/ar);_<=Math.floor((u+ti)/ar);_++){let v=o(_,m);v&&v.x+ti>=a&&v.x-ti<=u&&v.z+ti>=c&&v.z-ti<=h&&f.push(v)}return f}return{plan:o,around:l,chunk:(a,c)=>l(a*16,c*16,a*16+16-1,c*16+16-1)}}function kd(n,t,e,i,s,r,o){let l=t*16,a=e*16,c=(_,v)=>_>=l&&_<l+16&&v>=a&&v<a+16,u=i.biome==="desert",h=u?s.desert||{}:{},f=_=>{let v=s.palette[_];if(!v)return null;let p=h[v]||v;return r.byId(p)},m=u?r.byId("sandstone"):r.byId("cobblestone");for(let _ of i.paths){let v=Math.max(Math.abs(_.bx-_.ax),Math.abs(_.bz-_.az));for(let p=0;p<=v;p++){let x=Math.round(_.ax+(_.bx-_.ax)*p/v),T=Math.round(_.az+(_.bz-_.az)*p/v);if(!c(x,T))continue;let L=o.height(x,T),b=Te(x-l,L,T-a);n[b]&&n[b]!==r.water&&(n[b]=r.path);for(let A=L+1;A<Math.min(64,L+4);A++){let E=Te(x-l,A,T-a);(n[E]===r.leaves||n[E]===r.log||A===L+1)&&(n[E]=0)}}}for(let _ of i.structures){let v=s.templates[_.tpl];if(!v)continue;let[p,,x]=v.size;for(let T=0;T<x;T++)for(let L=0;L<p;L++){let[b,A]=Bd(L,T,p,x,_.rot),E=_.x0+b,D=_.z0+A;if(!c(E,D))continue;let M=E-l,w=D-a;for(let C=_.y-1;C>Math.max(0,_.y-8);C--){let N=Te(M,C,w);if(n[N]&&n[N]!==r.water)break;n[N]=m}for(let C=_.y+v.size[1];C<Math.min(64,_.y+v.size[1]+3);C++)n[Te(M,C,w)]=0;v.layers.forEach((C,N)=>{let X=(C[T]||"")[L];if(!X||X===" ")return;let U=_.y+N;U>=64||(n[Te(M,U,w)]=X==="."?0:f(X)||0)})}}}var En=24;var Gd={ocean:"\u6D77\u6D0B",plains:"\u8349\u539F",forest:"\u68EE\u6797",desert:"\u6C99\u6F20",snow:"\u96EA\u5730"},Vd=[{ore:"coal",y0:5,y1:55,count:12,chance:1,size:7},{ore:"iron",y0:4,y1:40,count:8,chance:1,size:5},{ore:"gold",y0:3,y1:24,count:3,chance:.8,size:4},{ore:"diamond",y0:2,y1:13,count:2,chance:.6,size:3}],lr=112;function Hd(n,t,e){let i=U=>t.num(U),s=U=>{try{return i(U)}catch{return 0}},r={air:0,grass:i("grass"),dirt:i("dirt"),stone:i("stone"),sand:i("sand"),water:i("water"),log:i("log"),leaves:i("leaves"),coal:i("coal_ore"),iron:i("iron_ore"),ruby:i("ruby_ore"),gold:i("gold_ore"),diamond:i("diamond_ore"),bedrock:i("bedrock"),stele:i("stele")};Object.assign(r,{portal:s("portal_forest"),sandstone:s("sandstone")||r.stone,cactus:s("cactus"),snow:s("snow")||r.grass,ice:s("ice")||r.water,slog:s("spruce_log")||r.log,sleaves:s("spruce_leaves")||r.leaves}),r.path=s("path")||r.dirt,r.byId=s;let o=["flower_rose","flower_marigold","flower_dandelion","flower_hydrangea","flower_cornflower","flower_lavender","flower_peony"].map(s).filter(Boolean);Object.assign(r,{tallgrass:s("tallgrass"),fern:s("fern"),deadbush:s("deadbush"),mushR:s("mushroom_red"),mushB:s("mushroom_brown")});let l=_s(n),a=_s(n+101),c=_s(n+202),u=_s(n+303),h=_s(n+404),f=Lh(n+505),m=Lh(n+606);function _(U,P){let k=ys(l,U/190,P/190,3),Z=ys(a,U/55,P/55,4),K=Math.max(0,ys(c,U/130,P/130,2)-.1),st=27+k*9+Z*6+K*K*75;return Math.max(4,Math.min(54,Math.floor(st)))}let v=_s(n+808);function p(U,P){let k=_(U,P),Z=ys(v,U/900,P/900,2),K=Math.min(1,Math.max(0,(Math.hypot(U,P)-240)/80)),st=Math.min(1,Math.max(0,(-.18-Z)/.17)),O=st*st*(3-2*st)*K;return O>0&&(k=Math.round(k*(1-O)+(En-14)*O)),k<En-1?Math.max(3,Math.floor(En-1-(En-1-k)*1.8)):k}function x(U,P){let k=(or(n+3,U,P)-.5)*.025;return{t:ys(u,U/420,P/420,2)+k,u:ys(h,U/380,P/380,2)-k}}function T(U,P,k=p(U,P)){if(k<En-1)return"ocean";let{t:Z,u:K}=x(U,P);return Z<-.3?"snow":Z>.28&&K<.05?"desert":K>.12?"forest":"plains"}let L=null;function b(){if(L)return L;let U=(P,k)=>{let Z=p(P,k);return Z>=En+2&&Math.abs(p(P+1,k)-Z)<2&&Math.abs(p(P,k+1)-Z)<2};for(let P=0;P<400;P+=2)for(let k=0;k<Math.max(1,P*2);k++){let Z=k/Math.max(1,P*2)*Math.PI*2,K=Math.round(Math.cos(Z)*P),st=Math.round(Math.sin(Z)*P);if(U(K,st)&&U(K+3,st+2))return L={x:K+.5,y:p(K,st)+1,z:st+.5,stele:{x:K+3,y:p(K+3,st+2)+1,z:st+2},portal:{x:K-3,y:Math.max(En+1,p(K-3,st+2))+1,z:st+2}},L}return L={x:.5,y:60,z:.5,stele:{x:3,y:58,z:2}},L}function A(U,P){let k=[],Z=U*16,K=P*16,st=Math.floor((Z-80)/lr),O=Math.floor((Z+16+80)/lr),ot=Math.floor((K-80)/lr),it=Math.floor((K+16+80)/lr);for(let Mt=ot;Mt<=it;Mt++)for(let gt=st;gt<=O;gt++){let vt=xt=>Qn(n+707,gt,xt,Mt);if(vt(0)>.25)continue;let bt=(gt+vt(1))*lr,_t=(Mt+vt(2))*lr,$=vt(3)*Math.PI,nt=40+vt(4)*30;k.push({ax:bt-Math.cos($)*nt/2,az:_t-Math.sin($)*nt/2,dx:Math.cos($)*nt,dz:Math.sin($)*nt,len:nt,floor:7+Math.floor(vt(5)*6),w:1.6+vt(6)*1.2})}return k}function E(U,P){let k=new Uint8Array(16384),Z=U*16,K=P*16,st=18,O=new Int16Array(st*st);for(let bt=-1;bt<=16;bt++)for(let _t=-1;_t<=16;_t++)O[(bt+1)*st+_t+1]=p(Z+_t,K+bt);let ot=b(),it=new Array(256);for(let bt=0;bt<16;bt++)for(let _t=0;_t<16;_t++){let $=Z+_t,nt=K+bt,xt=O[(bt+1)*st+_t+1],Lt=Math.max(Math.abs(O[(bt+1)*st+_t]-xt),Math.abs(O[(bt+1)*st+_t+2]-xt),Math.abs(O[bt*st+_t+1]-xt),Math.abs(O[(bt+2)*st+_t+1]-xt))>=3,ft=it[bt*16+_t]=T($,nt,xt),Ft=xt<=En+1,jt,Ht;ft==="ocean"||Ft||ft==="desert"?(jt=r.sand,Ht=r.sand):Lt?(jt=r.stone,Ht=r.stone):ft==="snow"?(jt=r.snow,Ht=r.dirt):(jt=r.grass,Ht=r.dirt);for(let Zt=0;Zt<=xt;Zt++){let ae;if(Zt===0?ae=r.bedrock:Zt===xt?ae=jt:Zt>=xt-3?ae=Ht:ft==="desert"&&Zt>=xt-7?ae=r.sandstone:ae=r.stone,ae===r.stone&&Lt&&Zt>=xt-4){let Wt=Qn(n,$,Zt,nt);Wt<.06?ae=r.coal:Wt<.09?ae=r.iron:Wt<.096&&(ae=r.ruby)}k[Te(_t,Zt,bt)]=ae}for(let Zt=xt+1;Zt<=En;Zt++)k[Te(_t,Zt,bt)]=Zt===En&&ft==="snow"?r.ice:r.water}D(k,U,P,O,st);for(let bt=0;bt<Vd.length;bt++){let _t=Vd[bt],$=r[_t.ore];for(let nt=0;nt<_t.count;nt++){let xt=jt=>Qn(n+31*bt+jt,U*977+nt,jt,P*131+nt);if(xt(9)>_t.chance)continue;let Lt=Math.floor(xt(1)*16),ft=_t.y0+Math.floor(xt(2)*(_t.y1-_t.y0)),Ft=Math.floor(xt(3)*16);for(let jt=0;jt<_t.size;jt++){Lt>=0&&Lt<16&&Ft>=0&&Ft<16&&ft>0&&ft<64&&k[Te(Lt,ft,Ft)]===r.stone&&(k[Te(Lt,ft,Ft)]=$);let Ht=Math.floor(xt(10+jt)*6);Ht===0?Lt++:Ht===1?Lt--:Ht===2?ft++:Ht===3?ft--:Ht===4?Ft++:Ft--}}}let Mt=e?X.chunk(U,P):[];M(k,U,P,O,st,it,ot,Mt);for(let bt of Mt)kd(k,U,P,bt,e,r,N);let gt=ot.stele;if(Math.floor(gt.x/16)===U&&Math.floor(gt.z/16)===P){let bt=gt.x-Z,_t=gt.z-K;k[Te(bt,gt.y,_t)]=r.stele,k[Te(bt,gt.y+1,_t)]=r.stele}let vt=ot.portal;if(r.portal&&vt&&Math.floor(vt.x/16)===U&&Math.floor(vt.z/16)===P){let bt=vt.x-Z,_t=vt.z-K;for(let $=Math.max(1,vt.y-3);$<vt.y;$++)(!k[Te(bt,$,_t)]||k[Te(bt,$,_t)]===r.water)&&(k[Te(bt,$,_t)]=r.stone);k[Te(bt,vt.y,_t)]=r.portal,k[Te(bt,vt.y+1,_t)]=r.portal}return k}function D(U,P,k,Z,K){let st=P*16,O=k*16,ot=4,it=16/ot+1,Mt=64/ot+1,gt=new Float32Array(it*it*Mt);for(let _t=0;_t<Mt;_t++)for(let $=0;$<it;$++)for(let nt=0;nt<it;nt++){let xt=st+nt*ot,Lt=_t*ot,ft=O+$*ot,Ft=f(xt/22,Lt/14,ft/22)-.5,jt=m(xt/22,Lt/14,ft/22)-.5;gt[(_t*it+$)*it+nt]=Ft*Ft+jt*jt}let vt=(_t,$,nt)=>gt[($*it+nt)*it+_t],bt=A(P,k);for(let _t=0;_t<16;_t++)for(let $=0;$<16;$++){let nt=Z[(_t+1)*K+$+1],xt=nt<=En+1,Lt=xt?nt-5:nt,ft=$>>2,Ft=_t>>2,jt=($&3)/ot,Ht=(_t&3)/ot;for(let Wt=3;Wt<=Lt;Wt++){let ee=Wt>>2,Se=(Wt&3)/ot,Xe=vt(ft,ee,Ft)+(vt(ft+1,ee,Ft)-vt(ft,ee,Ft))*jt,Ee=vt(ft,ee,Ft+1)+(vt(ft+1,ee,Ft+1)-vt(ft,ee,Ft+1))*jt,Le=vt(ft,ee+1,Ft)+(vt(ft+1,ee+1,Ft)-vt(ft,ee+1,Ft))*jt,H=vt(ft,ee+1,Ft+1)+(vt(ft+1,ee+1,Ft+1)-vt(ft,ee+1,Ft+1))*jt;if((Xe+(Ee-Xe)*Ht)*(1-Se)+(Le+(H-Le)*Ht)*Se<.008){let _e=Te($,Wt,_t);U[_e]!==r.bedrock&&U[_e]!==r.water&&(U[_e]=0)}}if(!bt.length||xt)continue;let Zt=st+$,ae=O+_t;for(let Wt of bt){let ee=Math.max(0,Math.min(1,((Zt-Wt.ax)*Wt.dx+(ae-Wt.az)*Wt.dz)/(Wt.len*Wt.len))),Se=Wt.ax+Wt.dx*ee,Xe=Wt.az+Wt.dz*ee,Ee=Math.hypot(Zt-Se,ae-Xe),Le=Wt.w*Math.sin(Math.PI*ee);if(Ee<Le)for(let H=Wt.floor+Math.floor(Ee*2);H<=nt;H++){let Fe=Te($,H,_t);U[Fe]!==r.water&&(U[Fe]=0)}}}}function M(U,P,k,Z,K,st,O,ot){let it=P*16,Mt=k*16;for(let gt=0;gt<16;gt++)for(let vt=0;vt<16;vt++){let bt=it+vt,_t=Mt+gt,$=Z[(gt+1)*K+vt+1],nt=st[gt*16+vt];if($+1>=64||Math.hypot(bt-O.x,_t-O.z)<48)continue;let xt=U[Te(vt,$,gt)],Lt=Te(vt,$+1,gt);if(U[Lt])continue;let ft=or(n+11,bt,_t),Ft=or(n+13,bt,_t);xt===r.grass?ft<.012&&o.length?U[Lt]=o[Math.floor(Ft*o.length)]:ft<(nt==="plains"?.1:.05)&&r.tallgrass?U[Lt]=r.tallgrass:nt==="forest"&&ft<.08&&r.fern?U[Lt]=r.fern:nt==="forest"&&ft<.084&&r.mushR&&(U[Lt]=Ft<.5?r.mushR:r.mushB):xt===r.sand&&nt==="desert"&&$>En+1&&ft<.008&&r.deadbush&&(U[Lt]=r.deadbush)}for(let gt=2;gt<14;gt++)for(let vt=2;vt<14;vt++){let bt=it+vt,_t=Mt+gt,$=Z[(gt+1)*K+vt+1],nt=st[gt*16+vt],xt=U[Te(vt,$,gt)];if(Math.abs(bt-O.x)<7&&Math.abs(_t-O.z)<7||ot.some(jt=>Math.abs(bt-jt.x)<ti+2&&Math.abs(_t-jt.z)<ti+2))continue;let Lt=or(n+7,bt,_t),ft=or(n+9,bt,_t);if(nt==="desert"&&xt===r.sand&&$>En+1&&Lt<.008&&r.cactus){let jt=1+Math.floor(ft*3);for(let Ht=$+1;Ht<=$+jt&&Ht<64;Ht++)U[Te(vt,Ht,gt)]=r.cactus;continue}if(nt==="snow"&&xt===r.snow&&Lt<.02){C(U,vt,gt,$,5+Math.floor(ft*3));continue}let Ft=nt==="forest"?.035:nt==="plains"?.003:0;xt===r.grass&&Lt<Ft&&w(U,vt,gt,$,bt,_t,4+Math.floor(ft*2))}}function w(U,P,k,Z,K,st,O){let ot=Z+O;if(!(ot+2>=64)){for(let it=ot-2;it<=ot+1;it++){let Mt=it>=ot?1:2;for(let gt=-Mt;gt<=Mt;gt++)for(let vt=-Mt;vt<=Mt;vt++){if(Mt===2&&Math.abs(vt)===2&&Math.abs(gt)===2&&Qn(n,K+vt,it,st+gt)<.6)continue;let bt=Te(P+vt,it,k+gt);U[bt]===r.air&&(U[bt]=r.leaves)}}U[Te(P,Z,k)]=r.dirt;for(let it=Z+1;it<=ot;it++)U[Te(P,it,k)]=r.log}}function C(U,P,k,Z,K){let st=Z+K;if(!(st+2>=64)){for(let O=Z+2;O<=st+1;O++){let ot=st+1-O,it=ot>=4?2:ot>=1?1:0;for(let Mt=-it;Mt<=it;Mt++)for(let gt=-it;gt<=it;gt++){if(it===2&&Math.abs(gt)+Math.abs(Mt)>3)continue;let vt=Te(P+gt,O,k+Mt);U[vt]===r.air&&(U[vt]=r.sleaves)}}U[Te(P,Z,k)]=r.dirt;for(let O=Z+1;O<=st;O++)U[Te(P,O,k)]=r.slog}}let N={height:p,baseHeight:_,biomeOf:T,climate:x,genChunk:E,findSpawn:b,SEA:En},X=zd(n,N,e);return N.villages=X,N}function Nh(n,t,e,i,s,r,o){let l=i/2,a=n-l,c=n+l,u=t,h=t+s,f=e-l,m=e+l,_=Math.floor(a),v=Math.floor(c-1e-6),p=Math.floor(u),x=Math.floor(h-1e-6),T=Math.floor(f),L=Math.floor(m-1e-6),b=!1;for(let A=p;A<=x;A++)for(let E=T;E<=L;E++)for(let D=_;D<=v;D++){let M=r(D,A,E);if(!M)continue;let w=M===!0?Gy:M;for(let C of w){let N=D+C[0],X=A+C[1],U=E+C[2],P=D+C[3],k=A+C[4],Z=E+C[5];if(!(P<=a+1e-6||N>=c-1e-6||k<=u+1e-6||X>=h-1e-6||Z<=f+1e-6||U>=m-1e-6)){if(!o)return!0;b=!0,o.push([N,X,U,P,k,Z])}}}return b}var Gy=[[0,0,0,1,1,1]],ro=(n,t,e,i,s,r)=>Nh(n,t,e,i,s,r,null),Wd=(n,t,e=.6,i=1.8)=>!ro(n.x,n.y,n.z,e,i,t);function Nl(n,t,e,i,s={}){let r=s.w||.6,o=s.h||1.8,l=!!s.canStep,a=r/2,c=!1,u=0,h=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z))*e,f=Math.max(1,Math.ceil(h/.3)),m=e/f,_=[];for(let v=0;v<f;v++){let p=t.y*m;p&&(_.length=0,Nh(n.x,n.y+p,n.z,r,o,i,_)?(p<0?(n.y=Math.max(..._.map(x=>x[4])),c=!0):n.y=Math.min(..._.map(x=>x[1]))-o,t.y=0):n.y+=p);for(let x of["x","z"]){let T=t[x]*m;if(!T)continue;let L={x:n.x,y:n.y,z:n.z};if(L[x]+=T,_.length=0,!Nh(L.x,L.y,L.z,r,o,i,_)){n[x]=L[x];continue}if(l&&(c||s.grounded)){let A=Math.max(..._.map(E=>E[4]));if(A-n.y>0&&A-n.y<=1.01&&!ro(L.x,A,L.z,r,o,i)&&!ro(n.x,A,n.z,r,o,i)){u+=A-n.y,n.y=A,n[x]=L[x];continue}}let b=x==="x"?0:2;n[x]=T>0?Math.min(..._.map(A=>A[b]))-a-1e-4:Math.max(..._.map(A=>A[b+3]))+a+1e-4,ro(n.x,n.y,n.z,r,o,i)&&(n[x]=L[x]-T),t[x]=0}}return!c&&t.y<=0&&ro(n.x,n.y-.02,n.z,r,o,i)&&(c=!0),{onGround:c,stepped:u}}function Hy(n,t,e,i,s,r){let o=[n.x,n.y,n.z],l=[t.x,t.y,t.z],a=null;for(let c of r){let u=[e+c[0],i+c[1],s+c[2]],h=[e+c[3],i+c[4],s+c[5]],f=0,m=1/0,_=-1,v=!0;for(let p=0;p<3&&v;p++){if(Math.abs(l[p])<1e-12){(o[p]<u[p]||o[p]>h[p])&&(v=!1);continue}let x=(u[p]-o[p])/l[p],T=(h[p]-o[p])/l[p];x>T&&([x,T]=[T,x]),x>f&&(f=x,_=p),T<m&&(m=T),f>m&&(v=!1)}if(v&&(!a||f<a.t)){let p=[0,0,0];_>=0&&(p[_]=-Math.sign(l[_])),a={t:f,face:_>=0?p:null}}}return a}function oo(n,t,e,i,s,r){let o=Math.floor(n.x),l=Math.floor(n.y),a=Math.floor(n.z),c=Math.sign(t.x),u=Math.sign(t.y),h=Math.sign(t.z),f=c?Math.abs(1/t.x):1/0,m=u?Math.abs(1/t.y):1/0,_=h?Math.abs(1/t.z):1/0,v=c?(c>0?o+1-n.x:n.x-o)*f:1/0,p=u?(u>0?l+1-n.y:n.y-l)*m:1/0,x=h?(h>0?a+1-n.z:n.z-a)*_:1/0,T=[0,0,0],L=0;for(;L<=e;){let b=i(o,l,a);if(b&&s(b)){let A=r&&r(b);if(!A)return{x:o,y:l,z:a,n:b,face:T,dist:L};let E=Hy(n,t,o,l,a,A);if(E&&E.t<=e)return{x:o,y:l,z:a,n:b,face:E.face||T,dist:E.t}}v<p&&v<x?(o+=c,L=v,v+=f,T=[-c,0,0]):p<x?(l+=u,L=p,p+=m,T=[0,-u,0]):(a+=h,L=x,x+=_,T=[0,0,-h])}return null}var Vh={};ss(Vh,{ACC:()=>qd,BOOST:()=>Uh,BRAKE:()=>$d,CONN:()=>An,DECAY:()=>Zd,DIR:()=>Tn,FRIC:()=>Yd,MAX:()=>ao,OPP:()=>Ul,blockId:()=>Fl,connect:()=>Oh,isStraight:()=>Fh,linked:()=>Kd,mount:()=>Bh,pos:()=>kh,shapeOf:()=>ts,step:()=>zh});var An={ns:["n","s"],ew:["e","w"],ne:["n","e"],nw:["n","w"],se:["s","e"],sw:["s","w"]},Tn={n:[0,-1],s:[0,1],e:[1,0],w:[-1,0]},Ul={n:"s",s:"n",e:"w",w:"e"},Xd={n:[.5,0],s:[.5,1],e:[1,.5],w:[0,.5]},qd=3,ao=6,Uh=11,Yd=.8,$d=6,Zd=1.5,Fh=n=>n==="ns"||n==="ew",Fl=(n,t)=>(n?"powered_rail":"rail")+(t==="ns"?"":"_"+t);function ts(n,t){if(!t||n===t)return n==="n"||n==="s"?"ns":"ew";for(let e in An)if(An[e].includes(n)&&An[e].includes(t))return e;return null}var Jd=(n,t,e,i)=>n(t+Tn[i][0],e+Tn[i][1]);function Kd(n,t,e){let i=n(t,e);return i?An[i.shape].filter(s=>{let r=Jd(n,t,e,s);return r&&An[r.shape].includes(Ul[s])}):[]}function Oh(n,t,e,i,s="n"){let r=[];for(let a of["n","e","s","w"]){let c=Jd(n,t,e,a);if(!c)continue;let u=t+Tn[a][0],h=e+Tn[a][1],f=Ul[a];if(An[c.shape].includes(f)){r.push({d:a,pri:0});continue}let m=Kd(n,u,h);if(m.length>=2)continue;let _=m.length?ts(m[0],f):ts(f);_&&(!c.powered||Fh(_))&&r.push({d:a,pri:1,ns:_})}r.sort((a,c)=>a.pri-c.pri);let o=[];for(let a of r){if(o.length===2)break;let c=o.length?ts(o[0].d,a.d):ts(a.d);!c||i&&!Fh(c)||o.push(a)}return{shape:o.length===2?ts(o[0].d,o[1].d):o.length?ts(o[0].d):ts(s),updates:o.filter(a=>a.pri===1).map(a=>[t+Tn[a.d][0],e+Tn[a.d][1],a.ns])}}function Bh(n,t,e,i,s,r,o=()=>!1){let l=An[n],a=u=>Tn[u][0]*s+Tn[u][1]*r+(o(u)?.01:0),c=a(l[0])>=a(l[1])?l[0]:l[1];return{x:t,y:e,z:i,shape:n,from:c===l[0]?l[1]:l[0],s:.5,v:0,lastIn:0}}function zh(n,t,e,i){let s=i(n.x,n.z);if(!s)return n.v=0,n;for(n.shape=s.shape,An[s.shape].includes(n.from)||(n.from=An[s.shape][0]),e<-.1&&n.lastIn>=-.1&&n.v===0&&(n.from=An[s.shape].find(r=>r!==n.from),n.s=1-n.s),n.lastIn=e,s.powered&&(n.v=Math.max(n.v,Uh)),e>.1?n.v<ao&&(n.v=Math.min(ao,n.v+qd*t)):e<-.1?n.v=Math.max(0,n.v-$d*t):n.v=Math.max(0,n.v-Yd*t),n.v>ao&&!s.powered&&(n.v=Math.max(ao,n.v-Zd*t)),n.s+=n.v*t;n.s>=1;){let r=An[s.shape].find(u=>u!==n.from),o=n.x+Tn[r][0],l=n.z+Tn[r][1],a=i(o,l),c=Ul[r];if(a&&An[a.shape].includes(c))n.x=o,n.z=l,n.from=c,n.s-=1,s=a,n.shape=a.shape,a.powered&&(n.v=Math.max(n.v,Uh));else{n.s=1,n.v=0;break}}return n}function kh(n){let t=An[n.shape],e=t.includes(n.from)?n.from:t[0],i=t[0]===e?t[1]:t[0],s=Xd[e],r=Xd[i],o=[.5,.5],l=Math.max(0,Math.min(1,n.s)),[a,c,u]=l<.5?[s,o,l*2]:[o,r,l*2-1];return{x:n.x+a[0]+(c[0]-a[0])*u,z:n.z+a[1]+(c[1]-a[1])*u,yaw:Math.atan2(-(c[0]-a[0]),-(c[1]-a[1]))}}var qh={};ss(qh,{HOTBAR:()=>Gh,SIZE:()=>Ol,add:()=>Sn,canAdd:()=>ho,count:()=>ei,craft:()=>Wh,craftable:()=>zl,createInventory:()=>lo,deserialize:()=>Bl,moveBetween:()=>Xh,moveSlot:()=>Hh,remove:()=>co,serialize:()=>uo,takeFromSlot:()=>Ai});var Ol=36,Gh=9;function lo(n=36){return{slots:new Array(n).fill(null)}}function Sn(n,t,e,i=()=>64){let s=i(t);for(let r=0;r<n.slots.length&&e>0;r++){let o=n.slots[r];if(o&&o.id===t&&o.count<s){let l=Math.min(e,s-o.count);o.count+=l,e-=l}}for(let r=0;r<n.slots.length&&e>0;r++)if(!n.slots[r]){let o=Math.min(e,s);n.slots[r]={id:t,count:o},e-=o}return e}function ei(n,t){return n.slots.reduce((e,i)=>e+(i&&i.id===t?i.count:0),0)}function co(n,t,e){if(ei(n,t)<e)return!1;for(let i=n.slots.length-1;i>=0&&e>0;i--){let s=n.slots[i];if(s&&s.id===t){let r=Math.min(e,s.count);s.count-=r,e-=r,s.count||(n.slots[i]=null)}}return!0}function Ai(n,t,e=1){let i=n.slots[t];if(!i||i.count<e)return null;i.count-=e;let s=i.id;return i.count||(n.slots[t]=null),s}function Hh(n,t,e,i=()=>64){if(t===e)return;let s=n.slots[t],r=n.slots[e];if(s&&r&&s.id===r.id){let o=Math.min(s.count,i(s.id)-r.count);r.count+=o,s.count-=o,s.count||(n.slots[t]=null);return}n.slots[t]=r,n.slots[e]=s}function ho(n,t,e,i=()=>64){let s={slots:n.slots.map(r=>r&&{...r})};return Sn(s,t,e,i)===0}var uo=n=>n.slots.map(t=>t?Number.isFinite(t.dur)?[t.id,t.count,t.dur]:[t.id,t.count]:0);function Bl(n,t=36){let e=lo(t);return(n||[]).slice(0,t).forEach((i,s)=>{Array.isArray(i)&&typeof i[0]=="string"&&i[1]>0&&(e.slots[s]={id:i[0],count:i[1]|0},Number.isFinite(i[2])&&(e.slots[s].dur=i[2]))}),e}function zl(n,t,e={}){if(t.blueprint&&!(e.owned&&e.owned.has(t.blueprint)))return{ok:!1,reason:"blueprint"};if(t.needs&&!(e.near&&e.near.has(t.needs)))return{ok:!1,reason:"needs"};for(let i in t.in)if(ei(n,i)<t.in[i])return{ok:!1,reason:"materials"};return{ok:!0}}function Wh(n,t,e=()=>64,i){let s=zl(n,t,i||{near:new Set([t.needs]),owned:new Set([t.blueprint])});if(!s.ok)return s;let r=n.slots.map(o=>o&&{...o});for(let o in t.in)co(n,o,t.in[o]);return Sn(n,t.out.id,t.out.count,e)>0?(n.slots=r,{ok:!1,reason:"full"}):{ok:!0}}function Xh(n,t,e,i,s=()=>64){let r=n.slots[t],o=e.slots[i];if(r&&o&&r.id===o.id){let l=Math.min(r.count,s(r.id)-o.count);o.count+=l,r.count-=l,r.count||(n.slots[t]=null);return}n.slots[t]=o,e.slots[i]=r}function Wy(n=0){return{coins:n|0,earned:0,spent:0,owned:[]}}var cr=(n,t)=>n.owned.includes(t),jd=(n,t)=>n?t?2:1:0;function vs(n,t){return t=Math.max(0,t|0),n.coins+=t,n.earned+=t,n.coins}function fo(n,t){return t=Math.max(0,t|0),n.coins<t?!1:(n.coins-=t,n.spent+=t,!0)}function Qd(n){return n.blocks.concat(n.items).filter(t=>t&&t.buy).map(t=>({id:t.id,name_zh:t.name_zh,qty:t.buy.qty||1,price:t.buy.price|0,locked:t.buy.locked||null})).concat((n.blueprints||[]).map(t=>({id:t.id,name_zh:t.name_zh,qty:1,price:t.price|0,locked:t.locked||null,blueprint:!0,desc:t.desc||""})))}function tp(n,t,e,i=()=>64){return e?e.locked?{ok:!1,reason:"locked"}:e.blueprint&&cr(n,e.id)?{ok:!1,reason:"owned"}:n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?(fo(n,e.price),n.owned.push(e.id),{ok:!0}):ho(t,e.id,e.qty,i)?(fo(n,e.price),Sn(t,e.id,e.qty,i),{ok:!0}):{ok:!1,reason:"full"}:{ok:!1,reason:"missing"}}var ep=n=>({coins:n.coins,earned:n.earned,spent:n.spent,owned:n.owned.slice()});function np(n){let t=Wy(n&&n.coins);return n&&(t.earned=n.earned|0,t.spent=n.spent|0,t.owned=Array.isArray(n.owned)?n.owned.slice():[]),t}function qy(){return new Map}function ip(n,t,e,i){let s=n.get(t);s||(s=new Map,n.set(t,s)),s.set(e,i)}function Yh(n){let t=new Array(n.size*2),e=0;for(let[i,s]of n)t[e++]=i,t[e++]=s;return t}function Yy(n){let t=new Map;for(let e=0;e+1<(n||[]).length;e+=2)t.set(n[e]|0,n[e+1]|0);return t}function sp(n){let t=qy();for(let e in n||{})t.set(e,Yy(n[e]));return t}var kl=16;var S1=18;var Ri=32;function rp(n){let t=n>>>0||7;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var $e=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],yt=(n,t=1,e=1)=>`rgba(${Math.round(Math.min(255,n[0]*t))},${Math.round(Math.min(255,n[1]*t))},${Math.round(Math.min(255,n[2]*t))},${e})`;function $y(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}function Kt(n,t){n.beginPath(),n.moveTo(t[0][0],t[0][1]);for(let e=1;e<t.length;e++)n.lineTo(t[e][0],t[e][1]);n.closePath(),n.fill()}function Ti(n,t,e,i,s){let r=3+Math.floor(t()*2),o=[];for(let l=0;l<r;l++){let a=l/r*Math.PI*2+t()*.8;o.push([e+Math.cos(a)*s*(.6+t()*.5),i+Math.sin(a)*s*(.6+t()*.5)])}Kt(n,o)}var Zy=new Set(["flower","tallgrass","fern","deadbush","mushroom","ladder","door_open","wheat","rail"]);function Jy(n,t){let e=$e(t.color),i=rp($y(t.block+t.face)),s=Ri;if(Zy.has(t.pattern)){Ky(n,t,e,i,s);return}let r=1;t.pattern==="stained"?r=.5:t.pattern==="glass"?r=.22:t.pattern==="water"?r=.72:t.pattern==="ice"&&(r=.78),n.fillStyle=yt(e,1,r),n.fillRect(0,0,s,s);let o=t.pattern,l=t.accent?$e(t.accent):null;if(o==="grass"&&t.face==="top"){n.fillStyle=yt(e,1.12);for(let h=0;h<4;h++)Ti(n,i,i()*s,i()*s,5+i()*4)}if(o==="snow"&&t.face==="top"){n.fillStyle=yt(e,.96);for(let h=0;h<4;h++)Ti(n,i,i()*s,i()*s,4+i()*4)}if((o==="grass"||o==="snow")&&t.face==="side"){let h=$e(t.top);n.fillStyle=yt(h);let f=[[0,0],[s,0]];for(let m=s;m>=0;m-=4)f.push([m,8+Math.round(i()*5)]);Kt(n,f)}if(o==="stone"||o==="bedrock")for(let h=0;h<5;h++)n.fillStyle=yt(e,i()<.5?.9:1.08),Ti(n,i,i()*s,i()*s,4+i()*6);if(o==="ore"){for(let h=0;h<4;h++)n.fillStyle=yt(e,.92),Ti(n,i,i()*s,i()*s,5);n.fillStyle=yt(l);for(let h=0;h<5;h++)Ti(n,i,5+i()*(s-10),5+i()*(s-10),2.5+i()*2.5)}if(o==="sand")for(let h=0;h<26;h++)n.fillStyle=yt(e,i()<.5?.92:1.05),n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2);if(o==="log"&&t.face==="side")for(let h=3;h<s;h+=7)n.fillStyle=yt(e,.82),n.fillRect(h,0,2,s);if(o==="log"&&t.face!=="side"&&(n.fillStyle=yt(e,.85),n.fillRect(6,6,s-12,s-12),n.fillStyle=yt(e,1.05),n.fillRect(11,11,s-22,s-22)),o==="leaves")for(let h=0;h<9;h++)n.fillStyle=yt(e,i()<.5?.78:1.15),Ti(n,i,i()*s,i()*s,3+i()*4);if(o==="planks"||o==="table"&&t.face==="bottom"){for(let h=7;h<s;h+=8)n.fillStyle=yt(e,.78),n.fillRect(0,h,s,1);n.fillStyle=yt(e,.85),n.fillRect(12,0,1,7),n.fillRect(22,8,1,7),n.fillRect(6,16,1,7),n.fillRect(18,24,1,8)}if(o==="table"&&t.face==="top"&&(n.fillStyle=yt(e,.8),n.fillRect(s/2-1,3,2,s-6),n.fillRect(3,s/2-1,s-6,2)),o==="table"&&t.face==="side"&&(n.fillStyle=yt(e,.7),n.fillRect(6,10,7,14),n.fillStyle=yt([185,182,174]),Kt(n,[[18,10],[27,12],[25,15],[19,14]]),n.fillStyle=yt(e,.6),n.fillRect(21,14,2,10)),o==="glass"&&(n.fillStyle="rgba(255,255,255,0.45)",Kt(n,[[6,24],[9,24],[24,9],[24,6]])),o==="water"){n.fillStyle=yt(e,1.18,.72);for(let h=6;h<s;h+=10)n.fillRect(4+Math.floor(i()*10),h,10,2)}if(o==="gold"&&(n.fillStyle=yt(e,1.15),Kt(n,[[0,0],[s,0],[0,s]]),n.fillStyle=yt(e,.9),Kt(n,[[s,s],[s,8],[8,s]])),o==="lamp"&&(t.face==="side"?(n.fillStyle=yt($e("#F3E3B5")),n.fillRect(7,6,s-14,s-12),n.fillStyle=yt(e,.85),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3)):t.face==="top"&&(n.fillStyle=yt(e,1.05),n.fillRect(8,8,s-16,s-16))),o==="torch"&&(n.clearRect(0,0,s,s),t.face==="side"?(n.fillStyle=yt($e("#8C6640")),n.fillRect(13,0,6,s),n.fillStyle=yt($e("#F2C46B")),n.fillRect(13,0,6,8),n.fillStyle=yt(l),n.fillRect(14,0,4,4)):(n.fillStyle=yt($e(t.face==="top"?"#F2C46B":"#8C6640")),n.fillRect(12,12,8,8))),o==="bed"&&(t.face==="top"?(n.fillStyle=yt(l),n.fillRect(0,0,s,10),n.fillStyle=yt(e,.85),n.fillRect(0,10,s,3)):t.face==="side"&&(n.fillStyle=yt($e("#E0352B")),n.fillRect(0,0,s,14),n.fillStyle=yt(l),n.fillRect(0,0,9,14))),o==="wool")for(let h=0;h<7;h++)n.fillStyle=yt(e,i()<.5?.94:1.04),Ti(n,i,i()*s,i()*s,4+i()*4);if(o==="portal"&&(n.fillStyle=yt(l),n.fillRect(5,5,s-10,s-10),n.fillStyle=yt(l,1.3),Kt(n,[[s/2,8],[s-9,s/2],[s/2,s-8],[9,s/2]]),n.fillStyle=yt($e("#EFEBDD"),1,.8),Kt(n,[[s/2,12],[s-13,s/2],[s/2,s-12],[13,s/2]]),n.fillStyle=yt(l),n.fillRect(s/2-3,s/2-3,6,6)),o==="sandstone")for(let h=8;h<s;h+=9)n.fillStyle=yt(e,.9),n.fillRect(0,h,s,2);if(o==="cactus")if(t.face==="side"){for(let h=4;h<s;h+=8)n.fillStyle=yt(e,.82),n.fillRect(h,0,2,s);n.fillStyle=yt($e("#EFEBDD"),1,.7);for(let h=0;h<6;h++)n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2)}else n.fillStyle=yt(e,.85),n.fillRect(6,6,s-12,s-12);if(o==="ice"&&(n.fillStyle="rgba(255,255,255,0.4)",Kt(n,[[4,22],[8,22],[22,6],[18,6]])),o==="stained"&&(n.fillStyle="rgba(255,255,255,0.35)",Kt(n,[[6,24],[9,24],[24,9],[24,6]])),o==="paper"&&(n.fillStyle=yt(e,1.1),Kt(n,[[0,0],[s,0],[0,s*.7]]),n.fillStyle=yt(e,.92),Kt(n,[[s,s],[s*.45,s],[s,s*.4]])),o==="stonebricks"||o==="mossy"&&t.block.includes("bricks")||o==="cracked"){n.fillStyle=yt(e,.78);for(let h=0;h<s;h+=8){n.fillRect(0,h+7,s,1);let f=h/8%2?0:8;for(let m=f;m<s;m+=16)n.fillRect(m,h,1,8)}}if(o==="mossy"){n.fillStyle=yt(l);for(let h=0;h<6;h++)Ti(n,i,i()*s,i()*s,3+i()*4)}if(o==="cracked"&&(n.fillStyle=yt(e,.6),Kt(n,[[4,2],[12,14],[10,15],[3,4]]),Kt(n,[[20,18],[29,30],[27,31],[19,20]])),o==="chiseled"&&(n.fillStyle=yt(e,.8),n.fillRect(5,5,s-10,s-10),n.fillStyle=yt(e,1.08),n.fillRect(9,9,s-18,s-18),n.fillStyle=yt(e,.85),n.fillRect(13,13,s-26,s-26)),o==="smooth"&&(n.fillStyle=yt(e,.9),n.fillRect(0,s/2,s,1)),o==="polished"&&(n.fillStyle=yt(e,1.08),Kt(n,[[0,0],[s*.6,0],[0,s*.6]])),o==="bricks"){n.fillStyle=yt($e("#D9CBB5"));for(let h=0;h<s;h+=8){n.fillRect(0,h+6,s,2);let f=h/8%2?0:8;for(let m=f;m<s;m+=16)n.fillRect(m,h,2,6)}}if(o==="checker"&&(n.fillStyle=yt(l),n.fillRect(0,0,s/2,s/2),n.fillRect(s/2,s/2,s/2,s/2)),o==="bookshelf"&&t.face==="side"){let h=["#C2443A","#4D6A99","#5E8B4E","#E1C04F","#7A5C8E","#D99AA5"];for(let f of[3,18]){let m=3;for(;m<s-4;){let _=3+Math.floor(i()*3);n.fillStyle=h[Math.floor(i()*h.length)],n.fillRect(m,f+Math.floor(i()*3),_,11),m+=_+1}}n.fillStyle=yt(e,.7),n.fillRect(0,15,s,2)}if(o==="bookshelf"&&t.face!=="side")for(let h=7;h<s;h+=8)n.fillStyle=yt(e,.8),n.fillRect(0,h,s,1);if(o==="hay")if(t.face==="side"){for(let h=3;h<s;h+=5)n.fillStyle=yt(e,.88),n.fillRect(h,0,1,s);n.fillStyle=yt($e("#8C6640")),n.fillRect(0,9,s,2),n.fillRect(0,21,s,2)}else n.fillStyle=yt(e,.9),n.fillRect(8,8,s-16,s-16);if(o==="barrel")if(t.face==="side"){for(let h=5;h<s;h+=6)n.fillStyle=yt(e,.85),n.fillRect(h,0,1,s);n.fillStyle=yt($e("#3B3D3A")),n.fillRect(0,5,s,2),n.fillRect(0,s-7,s,2)}else n.fillStyle=yt(e,.85),n.beginPath(),n.arc(s/2,s/2,11,0,7),n.fill(),n.fillStyle=yt(e,1.05),n.beginPath(),n.arc(s/2,s/2,7,0,7),n.fill();if(o==="crate"&&(n.fillStyle=yt(e,.78),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),Kt(n,[[4,s-7],[s-7,4],[s-4,7],[7,s-4]])),o==="door"){for(let h=7;h<s;h+=8)n.fillStyle=yt(e,.85),n.fillRect(h,0,1,s);n.fillStyle=yt($e("#EFEBDD"),1,.9),n.fillRect(8,5,6,7),n.fillRect(18,5,6,7),n.fillStyle=yt($e("#26302A")),n.fillRect(24,17,3,3)}if(o==="lantern"&&(t.face==="side"?(n.fillStyle=yt(l),n.fillRect(0,0,s,5),n.fillRect(0,s-5,s,5),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s)):(n.fillStyle=yt(e),n.fillRect(0,0,s,s),n.fillStyle=yt($e("#F2C46B")),n.fillRect(12,12,8,8))),o==="chest"){for(let h=7;h<s;h+=8)n.fillStyle=yt(e,.85),n.fillRect(0,h,s,1);t.face==="side"&&(n.fillStyle=yt(l),n.fillRect(0,11,s,3),n.fillStyle=yt($e("#D9A63A")),n.fillRect(s/2-3,10,6,7))}if(o==="farmland"&&t.face==="top")for(let h=3;h<s;h+=6)n.fillStyle=yt(e,.72),n.fillRect(0,h,s,2);if(o==="furnace"){for(let h=0;h<4;h++)n.fillStyle=yt(e,i()<.5?.9:1.08),Ti(n,i,i()*s,i()*s,4+i()*5);t.face==="side"?(n.fillStyle=yt(l),n.fillRect(8,15,s-16,11),n.fillStyle=yt($e("#E0352B"),1,.85),Kt(n,[[11,26],[s/2,18],[s-11,26]])):(n.fillStyle=yt(e,.8),n.fillRect(9,9,s-18,s-18))}o==="stele"&&t.face==="side"&&(n.fillStyle=yt(e,1.12),n.fillRect(5,4,s-10,s-8),n.fillStyle=yt(l),Kt(n,[[s/2,8],[s/2+6,s/2],[s/2,s-8],[s/2-6,s/2]]));let a=n.getImageData(0,0,s,s),c=a.data;for(let h=0;h<c.length;h+=4){let f=1+(i()-.5)*.09;c[h]=Math.min(255,c[h]*f),c[h+1]=Math.min(255,c[h+1]*f),c[h+2]=Math.min(255,c[h+2]*f)}n.putImageData(a,0,0);let u=o==="glass"?"rgba(207,227,223,0.75)":"rgba(20,24,20,0.13)";n.fillStyle=u,n.fillRect(0,0,s,2),n.fillRect(0,s-2,s,2),n.fillRect(0,2,2,s-4),n.fillRect(s-2,2,2,s-4),o!=="glass"&&o!=="water"&&(n.fillStyle="rgba(20,24,20,0.06)",n.fillRect(2,2,s-4,2),n.fillRect(2,s-4,s-4,2))}function op(n){let t=document.createElement("canvas");t.width=t.height=Ri*kl;let e=t.getContext("2d",{willReadFrequently:!0}),i=[];return n.tiles.forEach((s,r)=>{let o=document.createElement("canvas");o.width=o.height=Ri;let l=o.getContext("2d",{willReadFrequently:!0});Jy(l,s),e.drawImage(o,r%kl*Ri,Math.floor(r/kl)*Ri),i[r]=o}),{canvas:t,tileCanvas:i}}function ap(n,t){let e={};for(let i of n.blocks){if(!i.n)continue;let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");if(i.shape==="cross"||i.pattern==="ladder"||i.pattern==="door_open"||i.pattern==="rail"){r.drawImage(t.tileCanvas[i.tile.side],4,4,40,40),e[i.id]=s.toDataURL();continue}if(i.shape==="torch"){r.fillStyle="#8C6640",r.fillRect(21,16,6,28),r.fillStyle="#F2C46B",Kt(r,[[18,18],[24,4],[30,18],[24,22]]),r.fillStyle="#E0352B",Kt(r,[[21,16],[24,9],[27,16]]),e[i.id]=s.toDataURL();continue}let o=t.tileCanvas,l=1/Ri,a=(c,u,h,f,m,_,v,p)=>{r.setTransform(u*l,h*l,f*l,m*l,_,v),r.drawImage(o[c],0,0),p&&(r.fillStyle=`rgba(20,24,20,${p})`,r.fillRect(0,0,Ri,Ri))};a(i.tile.top,20,10,-20,10,24,4,0),a(i.tile.side,20,10,0,22,4,14,.12),a(i.tile.side,20,-10,0,22,24,24,.26),e[i.id]=s.toDataURL()}for(let i of n.items){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d"),o=i.icon,l=i.color,a="#8C6640";if(r.save(),r.translate(24,24),o==="lump")r.fillStyle=l,Kt(r,[[-14,4],[-8,-12],[6,-14],[15,-2],[10,12],[-6,14]]),r.fillStyle="rgba(255,255,255,.18)",Kt(r,[[-8,-12],[6,-14],[2,-4]]);else if(o==="ingot")r.fillStyle=l,Kt(r,[[-18,8],[-10,-6],[12,-6],[18,8]]),r.fillStyle="rgba(255,255,255,.3)",Kt(r,[[-10,-6],[12,-6],[9,-1],[-8,-1]]),r.fillStyle="rgba(0,0,0,.12)",r.fillRect(-18,8,36,4);else if(o==="hide")r.fillStyle=l,Kt(r,[[-15,-10],[-6,-15],[8,-13],[16,-6],[13,12],[0,15],[-14,10]]),r.fillStyle="rgba(0,0,0,.14)",Kt(r,[[-6,-4],[6,-6],[4,6],[-5,5]]);else if(o==="feather")r.rotate(-Math.PI/4),r.fillStyle=l,Kt(r,[[0,-20],[7,-6],[5,10],[0,14],[-5,10],[-7,-6]]),r.fillStyle="#B9B6AE",r.fillRect(-1,-14,2,32);else if(o==="seeds"){r.fillStyle=l;for(let[c,u]of[[-6,-4],[3,-8],[6,3],[-3,6],[-9,6]])r.beginPath(),r.ellipse(c,u,3,2,.6,0,7),r.fill()}else if(o==="wheat"){r.rotate(-Math.PI/4),r.fillStyle="#B89A4A",r.fillRect(-1,-6,2,24),r.fillStyle=l;for(let c=0;c<4;c++)Kt(r,[[0,-18+c*5],[-5,-14+c*5],[0,-12+c*5]]),Kt(r,[[0,-18+c*5],[5,-14+c*5],[0,-12+c*5]])}else if(o==="bread"){r.fillStyle=l,r.beginPath(),r.ellipse(0,2,17,10,-.2,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)";for(let c of[-8,0,8])r.fillRect(c-1,-6,3,8)}else if(o==="armor_helmet")r.fillStyle=l,Kt(r,[[-14,6],[-14,-6],[-6,-14],[6,-14],[14,-6],[14,6],[8,6],[8,-2],[-8,-2],[-8,6]]);else if(o==="armor_chest")r.fillStyle=l,Kt(r,[[-16,-12],[-6,-16],[0,-10],[6,-16],[16,-12],[12,-2],[10,16],[-10,16],[-12,-2]]);else if(o==="armor_legs")r.fillStyle=l,Kt(r,[[-12,-16],[12,-16],[12,16],[3,16],[0,-4],[-3,16],[-12,16]]);else if(o==="armor_boots")r.fillStyle=l,Kt(r,[[-16,-4],[-8,-4],[-8,8],[-2,12],[-2,16],[-16,16]]),Kt(r,[[2,-4],[10,-4],[10,8],[16,12],[16,16],[2,16]]);else if(o==="dye")r.fillStyle=l,r.beginPath(),r.arc(-2,2,12,0,7),r.fill(),r.beginPath(),r.arc(9,-8,5,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)",r.beginPath(),r.arc(-6,-2,4,0,7),r.fill();else if(o==="boat")r.fillStyle=l,Kt(r,[[-19,-3],[19,-3],[13,10],[-13,10]]),r.fillStyle="rgba(0,0,0,.2)",Kt(r,[[-15,-3],[15,-3],[13,1],[-13,1]]),r.fillStyle=a,r.fillRect(-2,-14,3,11);else if(o==="minecart"){r.fillStyle=l,Kt(r,[[-16,-10],[16,-10],[13,8],[-13,8]]),r.fillStyle="rgba(0,0,0,.25)",Kt(r,[[-12,-10],[12,-10],[11,-5],[-11,-5]]),r.fillStyle="#26302A";for(let c of[-8,8])r.beginPath(),r.arc(c,10,4,0,7),r.fill()}else o==="saddle"?(r.fillStyle=l,Kt(r,[[-16,-2],[-10,-10],[-2,-6],[6,-12],[16,-4],[12,8],[-12,8]]),r.fillStyle="#26302A",r.fillRect(-2,8,4,9),r.fillStyle="#D9A63A",r.fillRect(-4,15,8,3)):o==="gem"?(r.fillStyle=l,Kt(r,[[0,-16],[14,-4],[0,16],[-14,-4]]),r.fillStyle="rgba(255,255,255,.35)",Kt(r,[[0,-16],[14,-4],[0,-2]])):(r.rotate(-Math.PI/4),r.fillStyle=o==="stick"?l:a,r.fillRect(-3,-14,6,32),r.fillStyle=l,o==="pickaxe"&&(r.beginPath(),r.moveTo(-16,-14),r.quadraticCurveTo(0,-24,16,-14),r.lineTo(14,-9),r.quadraticCurveTo(0,-17,-14,-9),r.closePath(),r.fill()),o==="axe"&&Kt(r,[[2,-18],[15,-14],[15,-2],[2,-6]]),o==="shovel"&&Kt(r,[[-7,-22],[7,-22],[8,-10],[0,-5],[-8,-10]]),o==="hoe"&&r.fillRect(-3,-18,14,5),o==="sword"&&(r.fillRect(-4,-24,8,30),Kt(r,[[-4,-24],[0,-30],[4,-24]]),r.fillStyle=a,r.fillRect(-9,6,18,4)));r.restore(),e[i.id]=s.toDataURL()}for(let i of n.blueprints||[]){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");r.fillStyle="#26302A",Kt(r,[[6,10],[40,6],[42,38],[8,42]]),r.fillStyle="rgba(239,235,221,.55)";for(let o=0;o<4;o++)r.fillRect(12,14+o*7,24,2);r.fillStyle=i.id==="bp_diamond"?"#6FC7C0":"#D8D4CA",Kt(r,[[28,26],[36,30],[30,38],[24,32]]),e[i.id]=s.toDataURL()}return e}function lp(){let n=rp(99),t=[],e=[];for(let i=0;i<4;i++){let s=document.createElement("canvas");s.width=s.height=Ri;let r=s.getContext("2d");i&&r.drawImage(e[i-1],0,0),r.fillStyle="rgba(21,23,20,0.55)";for(let o=0;o<3+i*2;o++){let l=6+n()*20,a=6+n()*20,c=n()*Math.PI;Kt(r,[[l,a],[l+Math.cos(c)*9,a+Math.sin(c)*9],[l+Math.cos(c+.3)*6,a+Math.sin(c+.3)*6]])}e.push(s),t.push(s)}return t}function Ky(n,t,e,i,s){n.clearRect(0,0,s,s);let r=t.pattern,o=t.accent?$e(t.accent):e,l=(a,c,u)=>{n.fillStyle=u,n.fillRect(a,s-c,2,c)};if(r==="flower"){l(15,18,yt(e)),n.fillStyle=yt(e,1.1),Kt(n,[[16,26],[9,20],[15,22]]),Kt(n,[[17,24],[24,18],[18,21]]),n.fillStyle=yt(o);for(let a=0;a<5;a++){let c=a/5*Math.PI*2;Kt(n,[[16,9],[16+Math.cos(c)*7,9+Math.sin(c)*7],[16+Math.cos(c+.6)*7,9+Math.sin(c+.6)*7]])}n.fillStyle=yt($e("#E1C04F")),n.fillRect(14,7,4,4)}else if(r==="tallgrass"||r==="fern")for(let a=0;a<6;a++){let c=4+a*4+Math.floor(i()*2),u=14+Math.floor(i()*14);n.fillStyle=yt(e,i()<.5?.9:1.1),Kt(n,[[c,s],[c+3,s],[c+1+(r==="fern"?2:0),s-u]])}else if(r==="deadbush")n.strokeStyle=yt(e),n.lineWidth=2,n.beginPath(),n.moveTo(16,s),n.lineTo(16,18),n.lineTo(9,10),n.moveTo(16,20),n.lineTo(24,11),n.moveTo(16,24),n.lineTo(7,19),n.stroke();else if(r==="mushroom")n.fillStyle=yt(e),n.fillRect(14,18,4,14),n.fillStyle=yt(o),Kt(n,[[6,19],[10,11],[16,8],[22,11],[26,19]]),n.fillStyle=yt($e("#EFEBDD")),n.fillRect(12,13,3,2),n.fillRect(19,15,2,2);else if(r==="ladder"){n.fillStyle=yt(e),n.fillRect(5,0,3,s),n.fillRect(s-8,0,3,s),n.fillStyle=yt(e,1.12);for(let a=3;a<s;a+=7)n.fillRect(5,a,s-10,3)}else if(r==="wheat"){let a=Number(t.block.split("_")[1])||0,c=[8,14,21,28][a];for(let u=0;u<5;u++){let h=5+u*5;n.fillStyle=yt(e),n.fillRect(h,s-c,2,c),a===3&&(n.fillStyle=yt(o),Kt(n,[[h-2,s-c+9],[h+1,s-c-1],[h+4,s-c+9]]))}}else if(r==="rail"){let a=(t.block.match(/_(ew|ne|nw|se|sw)$/)||[0,"ns"])[1],c={ns:0,ew:1,ne:0,se:1,sw:2,nw:3}[a];n.save(),n.translate(s/2,s/2),n.rotate(c*Math.PI/2),n.translate(-s/2,-s/2);let u=yt($e("#8C6640")),h=yt(e),f=s*.33,m=s*.67;if(a==="ns"||a==="ew"){n.fillStyle=u;for(let _=2;_<s;_+=6)n.fillRect(4,_,s-8,3);n.fillStyle=h,n.fillRect(f-1.5,0,3,s),n.fillRect(m-1.5,0,3,s),t.accent&&(n.fillStyle=yt(o),n.fillRect(s/2-1.5,3,3,s-6))}else{n.strokeStyle=u,n.lineWidth=3;for(let _=0;_<5;_++){let v=Math.PI/2+(_+.5)/5*Math.PI/2;n.beginPath(),n.moveTo(s+Math.cos(v)*(s-m-4),Math.sin(v)*(s-m-4)),n.lineTo(s+Math.cos(v)*(s-f+4),Math.sin(v)*(s-f+4)),n.stroke()}n.strokeStyle=h;for(let _ of[s-f,s-m])n.beginPath(),n.arc(s,0,_,Math.PI/2,Math.PI),n.stroke()}n.restore()}else r==="door_open"&&(n.fillStyle=yt(e),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3),n.fillRect(0,0,3,s),n.fillRect(s-3,0,3,s))}var cp=`attribute float light; attribute vec2 lt; varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vUv=uv; vL=light; vLt=lt; vec4 mv=modelViewMatrix*vec4(position,1.0); vD=-mv.z; gl_Position=projectionMatrix*mv; }`,hp=`uniform sampler2D uAtlas; uniform float uDay; uniform vec3 uFog; uniform float uNear; uniform float uFar;
varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vec4 t=texture2D(uAtlas,vUv); if(t.a<0.04) discard;
 vec3 tint=vec3(1.0); float l;
 if(vL>1.5){ l=1.12; } else {
  float sky=vLt.x*mix(0.35,1.0,uDay), bl=vLt.y;
  l=vL*mix(0.16,1.0,max(sky,bl)); l=floor(l*5.0+0.5)/5.0; l=max(l,0.08);
  tint=mix(vec3(1.0),vec3(1.12,0.97,0.8),step(sky,bl)*bl);
 }
 float f=smoothstep(uNear,uFar,vD); gl_FragColor=vec4(mix(t.rgb*l*tint,uFog,f), t.a); }`;function jy(n,t){let e=Ei(n),i=Ei(t),s=[[e,i]];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){if(!o&&!r)continue;let l=(e+o)*16,a=(i+r)*16,c=n<l?l-n:n>=l+16?n-(l+16-1):0,u=t<a?a-t:t>=a+16?t-(a+16-1):0;Math.max(c,u)<=14&&s.push([e+o,i+r])}return s}function fp(n){let t=new ui(n);t.magFilter=je,t.minFilter=je,t.generateMipmaps=!1;let e={uAtlas:{value:t},uDay:{value:1},uFog:{value:new J(.94,.92,.87)},uNear:{value:30},uFar:{value:60}},i=new mn({uniforms:e,vertexShader:cp,fragmentShader:hp}),s=new mn({uniforms:e,vertexShader:cp,fragmentShader:hp,transparent:!0,depthWrite:!1,side:zn});return{opaque:i,trans:s,uniforms:e,tex:t}}function up(n){let t=new tn;return t.setAttribute("position",new Ye(n.pos,3)),t.setAttribute("uv",new Ye(n.uv,2)),t.setAttribute("light",new Ye(n.light,1)),t.setAttribute("lt",new Ye(n.lt,2,!0)),t.setIndex(new Ye(n.index,1)),t.computeBoundingSphere(),t}var Vl=class{constructor({scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}){Object.assign(this,{scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}),this.chunks=new Map,this.dirtyMesh=new Set,this.inflight=0,this.maxInflight=3,this.rd=4,this.rev=0,this.stats={meshMs:[],genMs:[],loaded:0},s.addEventListener("message",l=>this.onMsg(l.data))}onMsg(t){if(t.type!=="chunk"&&t.type!=="mesh")return;let e=xs(t.cx,t.cz),i=this.chunks.get(e);t.type==="chunk"&&this.inflight--,i&&(t.type==="chunk"&&(i.vox=t.vox,i.state="ready",this.stats.genMs.push(t.genMs)),!(t.rev<i.meshRev)&&(this.stats.meshMs.push(t.ms),this.stats.meshMs.length>400&&this.stats.meshMs.shift(),this.setMesh(i,t.mesh)))}setMesh(t,e){for(let i of["o","t"])t[i]&&(this.scene.remove(t[i]),t[i].geometry.dispose(),t[i]=null);e.opaque.index.length&&(t.o=new We(up(e.opaque),this.mats.opaque),t.o.position.set(t.cx*16,0,t.cz*16),t.o.matrixAutoUpdate=!1,t.o.updateMatrix(),this.scene.add(t.o)),e.trans.index.length&&(t.t=new We(up(e.trans),this.mats.trans),t.t.position.set(t.cx*16,0,t.cz*16),t.t.matrixAutoUpdate=!1,t.t.updateMatrix(),t.t.renderOrder=1,this.scene.add(t.t))}flushMeshes(){if(this.dirtyMesh.size){for(let t of this.dirtyMesh){let e=this.chunks.get(t);e&&e.state==="ready"&&(e.meshRev=++this.rev,this.worker.postMessage({type:"mesh",cx:e.cx,cz:e.cz,rev:e.meshRev}))}this.dirtyMesh.clear()}}update(t,e){this.flushMeshes();let i=Ei(t),s=Ei(e),r=Od(i,s,this.rd);for(let a of r){if(this.inflight>=this.maxInflight)break;let c=xs(a.cx,a.cz);if(this.chunks.has(c))continue;let u={cx:a.cx,cz:a.cz,vox:null,state:"loading",meshRev:++this.rev,o:null,t:null};this.chunks.set(c,u),this.inflight++,this.worker.postMessage({type:"load",cx:a.cx,cz:a.cz,rev:u.meshRev})}let o=this.rd+1.5,l=[];for(let[a,c]of this.chunks){let u=c.cx-i,h=c.cz-s;if(u*u+h*h>o*o){for(let f of["o","t"])c[f]&&(this.scene.remove(c[f]),c[f].geometry.dispose());this.chunks.delete(a),l.push(a)}}l.length&&this.worker.postMessage({type:"drop",keys:l.filter(a=>{let[c,u]=a.split(",").map(Number);return Math.abs(c-i)>this.rd+3||Math.abs(u-s)>this.rd+3})}),this.stats.loaded=[...this.chunks.values()].filter(a=>a.state==="ready").length}ready(t,e){let i=this.chunks.get(xs(Ei(t),Ei(e)));return!!(i&&i.state==="ready")}get(t,e,i){let s=Ih(t,e,i);if(!s)return e<0?13:0;let r=this.chunks.get(xs(s.cx,s.cz));return r&&r.vox?r.vox[s.i]:0}set(t,e,i,s){let r=Ih(t,e,i);if(!r)return!1;let o=xs(r.cx,r.cz),l=this.chunks.get(o);if(!l||!l.vox)return!1;l.vox[r.i]=s,ip(this.diffs,o,r.i,s),this.worker.postMessage({type:"set",x:t,y:e,z:i,n:s});let a=Math.floor(t),c=Math.floor(i);for(let[u,h]of jy(a,c))this.dirtyMesh.add(xs(u,h));return this.onDirty&&this.onDirty(o),!0}setRenderDistance(t){this.rd=t;let e=this.mats.uniforms;e.uFar.value=t*16-2,e.uNear.value=Math.max(8,t*16*.45)}clear(){for(let t of this.chunks.values())for(let e of["o","t"])t[e]&&(this.scene.remove(t[e]),t[e].geometry.dispose());this.chunks.clear()}};var $h="hw_world",po=null;function dp(n){n!==$h&&($h=n,po=null)}function pp(){return po||(po=new Promise((n,t)=>{if(!("indexedDB"in self))return t(new Error("no indexedDB"));let e=indexedDB.open($h,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)}),po)}function Zh(n,t){return pp().then(e=>new Promise((i,s)=>{let r=e.transaction("kv",n),o=r.objectStore("kv"),l=t(o);r.oncomplete=()=>i(l instanceof IDBRequest?l.result:void 0),r.onerror=()=>s(r.error)}))}var Jh=n=>Zh("readonly",t=>t.get(n)),Kh=n=>Zh("readwrite",t=>{for(let e in n)t.put(n[e],e)});async function mp(n){let t=await pp();return new Promise((e,i)=>{let s={},r=t.transaction("kv","readonly"),o=r.objectStore("kv").openCursor(IDBKeyRange.bound(n,n+"\uFFFF"));o.onsuccess=()=>{let l=o.result;l&&(s[l.key]=l.value,l.continue())},r.oncomplete=()=>e(s),r.onerror=()=>i(r.error)})}async function gp(n){let t={};for(let e of n){let i=await Jh(e);i!==void 0&&(t[e]=i)}await Zh("readwrite",e=>e.clear()),await Kh(t)}function F(n,t,...e){let i=document.createElement(n);for(let s in t||{}){let r=t[s];r==null||r===!1||(s.startsWith("on")?i.addEventListener(s.slice(2),r):s==="html"?i.innerHTML=r:i.setAttribute(s,r===!0?"":r))}for(let s of e.flat())s!=null&&s!==!1&&i.append(s.nodeType?s:document.createTextNode(String(s)));return i}var Ci=n=>document.querySelector(n);var tv="../../",ev=["data/words.js","data/words-2.js","data/words-3.js","data/words-4.js","data/phrases.js","data/roots.js","data/grammar.js","data/patterns.js","engine.js"],jh=["zh2en","en2zh","zh2en-type","phrase-fill","grammar-fill","pattern-choose"],Gl=null;function nv(n){return new Promise((t,e)=>{let i=document.createElement("script");i.src=n,i.onload=t,i.onerror=()=>e(new Error("load "+n)),document.head.appendChild(i)})}function Qh(){return Gl||(Gl=(async()=>{for(let t of ev)await nv(tv+t);let n=window;return new n.KE.Engine({words:n.DATA_WORDS||[],phrases:n.DATA_PHRASES||[],roots:n.DATA_ROOTS||[],grammar:n.DATA_GRAMMAR||[],patterns:n.DATA_PATTERNS||[]})})().catch(n=>{throw Gl=null,n})),Gl}async function xp(n,{onReward:t,onClose:e,count:i=5}){n.innerHTML="",n.hidden=!1;let s=F("div",{class:"panel quiz"});n.append(s),s.append(F("div",{class:"p-head"},F("h2",{},"\u7DF4\u7FD2\u77F3\u7891"),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:h},"\xD7")),F("p",{class:"muted"},"\u984C\u5EAB\u8F09\u5165\u4E2D\u2026"));let r;try{r=await Qh()}catch{s.lastChild.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557\uFF0C\u8ACB\u6AA2\u67E5\u7DB2\u8DEF\u5F8C\u518D\u8A66\u4E00\u6B21\u3002";return}let o=window.KE,l=[],a=0,c=0,u=0;function h(){n.hidden=!0,n.innerHTML="",e&&e()}function f(){l=r.buildQuiz({modules:["words","phrases","grammar","patterns"],types:jh,lv:1,count:i}),l.length||(l=r.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:i})),a=0,c=0,u=0,m()}function m(){s.innerHTML="";let p=l[a],x=o.isTyped(p);n._q=p;let T=F("div",{class:"fb"}),L=F("div",{class:"q-body"});s.append(F("div",{class:"p-head"},F("h2",{},"\u7DF4\u7FD2\u77F3\u7891 ",F("small",{},`\u7B2C ${a+1} / ${l.length} \u984C`)),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:h},"\xD7")),F("div",{class:"q-type"},(o.TYPES[p.type]||"\u984C\u76EE")+(x?"\u3000\u6253\u5B57\u984C \xB7 \u7B54\u5C0D 2 \u91D1\u5E63":"\u3000\u7B54\u5C0D 1 \u91D1\u5E63")),F("div",{class:"q-prompt"+(p.en?" en":"")},p.prompt),p.sub?F("div",{class:"q-sub"},p.sub):null,L,T);let b=!1,A=E=>{if(b)return;b=!0;let D=jd(E,x);E&&(u++,c+=D,t&&t(D)),T.className="fb "+(E?"ok":"bad"),T.append(F("div",{},E?`\u7B54\u5C0D\u4E86\uFF01 +${D} \u91D1\u5E63`:"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",E?null:F("b",{class:"en"},p.answer)),!E&&p.why?F("div",{class:"why"},p.why):null,F("button",{class:"btn",onclick:_},a+1<l.length?"\u4E0B\u4E00\u984C":"\u770B\u7D50\u679C"))};if(p.input==="type"){let E=F("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),D=()=>{b||!E.value.trim()||A(r.check(p,E.value).ok)};E.addEventListener("keydown",M=>{M.stopPropagation(),M.key==="Enter"&&D()}),L.append(F("div",{class:"typerow"},E,F("button",{class:"btn",onclick:D},"\u9001\u51FA"))),setTimeout(()=>E.focus(),50)}else{let E=F("div",{class:"opts"});(p.options||[]).forEach(D=>E.append(F("button",{class:"opt"+(/[a-z]/i.test(D)?" en":""),onclick:M=>{if(b)return;let w=r.check(p,D).ok;M.currentTarget.classList.add(w?"ok":"bad"),A(w)}},D))),L.append(E)}}function _(){a++,a<l.length?m():v()}function v(){s.innerHTML="",s.append(F("div",{class:"p-head"},F("h2",{},"\u9019\u4E00\u56DE\u7D50\u675F"),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:h},"\xD7")),F("p",{class:"big"},`\u7B54\u5C0D ${u} / ${l.length} \u984C\uFF0C\u62FF\u5230 ${c} \u91D1\u5E63`),F("div",{class:"row"},F("button",{class:"btn",onclick:f},"\u518D\u4F86\u4E00\u56DE"),F("button",{class:"btn ghost",onclick:h},"\u56DE\u53BB\u84CB\u623F\u5B50")))}f()}var iv=new Set(jh);async function _p(n,{ids:t=[],onDone:e}){n.innerHTML="",n.hidden=!1;let i=F("div",{class:"panel quiz"});n.append(i),i.append(F("p",{class:"muted"},"\u932F\u984C\u602A\u51FA\u984C\u4E2D\u2026"));let s;try{s=await Qh()}catch{i.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(null)},1200);return}let r=window.KE,o=null;for(let m of t){let _=s.byId[m];if(_&&iv.has(_.type)){o=s.get(m);break}}let l=!!o;o||(o=s.buildQuiz({modules:["words","phrases","grammar","patterns"],types:jh,lv:1,count:1})[0]);let a=r.isTyped(o);n._q=o,i.innerHTML="";let c=F("div",{class:"fb"}),u=F("div",{class:"q-body"});i.append(F("div",{class:"p-head"},F("h2",{},"\u932F\u984C\u602A\u4F86\u4E86\uFF01")),F("div",{class:"q-type"},(l?"\u4F60\u4EE5\u524D\u932F\u904E\u7684\u984C\u76EE":r.TYPES[o.type]||"\u984C\u76EE")+"\u3000\u7B54\u5C0D\u5C31\u80FD\u6253\u6557\u5B83"),F("div",{class:"q-prompt"+(o.en?" en":"")},o.prompt),o.sub?F("div",{class:"q-sub"},o.sub):null,u,c);let h=!1,f=m=>{h||(h=!0,c.className="fb "+(m?"ok":"bad"),c.append(F("div",{},m?"\u7B54\u5C0D\u4E86\uFF01\u932F\u984C\u602A\u8B8A\u6210\u7D19\u7247\u98DB\u8D70\u4E86":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",m?null:F("b",{class:"en"},o.answer)),!m&&o.why?F("div",{class:"why"},o.why):null,F("button",{class:"btn",onclick:()=>{n.hidden=!0,n.innerHTML="",e&&e(m,a)}},"\u7E7C\u7E8C")))};if(o.input==="type"){let m=F("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),_=()=>{h||!m.value.trim()||f(s.check(o,m.value).ok)};m.addEventListener("keydown",v=>{v.stopPropagation(),v.key==="Enter"&&_()}),u.append(F("div",{class:"typerow"},m,F("button",{class:"btn",onclick:_},"\u9001\u51FA"))),setTimeout(()=>m.focus(),50)}else{let m=F("div",{class:"opts"});(o.options||[]).forEach(_=>m.append(F("button",{class:"opt"+(/[a-z]/i.test(_)?" en":""),onclick:v=>{if(h)return;let p=s.check(o,_).ok;v.currentTarget.classList.add(p?"ok":"bad"),f(p)}},_))),u.append(m)}}async function yp(n,{quest:t,onDone:e}){n.innerHTML="",n.hidden=!1;let i=F("div",{class:"panel quiz"});n.append(i),i.append(F("p",{class:"muted"},"\u59D4\u8A17\u6E96\u5099\u4E2D\u2026"));let s;try{s=await Qh()}catch{i.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(-1)},1200);return}let r=window.KE,o=s.buildQuiz({modules:[t.module],types:t.types,lv:t.lv,count:t.count});o.length||(o=s.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:t.count}));let l=0,a=0,c=()=>{i.innerHTML="";let u=o[l];n._q=u;let h=F("div",{class:"fb"}),f=F("div",{class:"q-body"});i.append(F("div",{class:"p-head"},F("h2",{},t.title_zh+" ",F("small",{},`\u7B2C ${l+1} / ${o.length} \u984C \xB7 \u8981\u7B54\u5C0D ${t.need} \u984C`))),F("div",{class:"q-type"},r.TYPES[u.type]||"\u984C\u76EE"),F("div",{class:"q-prompt"+(u.en?" en":"")},u.prompt),u.sub?F("div",{class:"q-sub"},u.sub):null,f,h);let m=!1,_=v=>{m||(m=!0,v&&a++,h.className="fb "+(v?"ok":"bad"),h.append(F("div",{},v?"\u7B54\u5C0D\u4E86\uFF01":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",v?null:F("b",{class:"en"},u.answer)),!v&&u.why?F("div",{class:"why"},u.why):null,F("button",{class:"btn",onclick:()=>{l++,l<o.length?c():(n.hidden=!0,n.innerHTML="",e&&e(a,o.length))}},l+1<o.length?"\u4E0B\u4E00\u984C":"\u5B8C\u6210")))};if(u.input==="type"){let v=F("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),p=()=>{m||!v.value.trim()||_(s.check(u,v.value).ok)};v.addEventListener("keydown",x=>{x.stopPropagation(),x.key==="Enter"&&p()}),f.append(F("div",{class:"typerow"},v,F("button",{class:"btn",onclick:p},"\u9001\u51FA"))),setTimeout(()=>v.focus(),50)}else{let v=F("div",{class:"opts"});(u.options||[]).forEach(p=>v.append(F("button",{class:"opt"+(/[a-z]/i.test(p)?" en":""),onclick:x=>{if(m)return;let T=s.check(u,p).ok;x.currentTarget.classList.add(T?"ok":"bad"),_(T)}},p))),f.append(v)}};c()}function vp(n,t,e){let[i,s]=String(n).split(",").map(Number),r=u=>Qn(4242,i|0,t*7+u,s|0),o=e.professions[Math.floor(r(1)*e.professions.length)],l=e.quests,a=Math.floor(r(2)*l.length),c=(a+1+Math.floor(r(3)*(l.length-1)))%l.length;return{prof:o,quests:[l[a],l[c]]}}function Mp(n,t,e,i=()=>64){return n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?cr(n,e.blueprint)?{ok:!1,reason:"owned"}:(fo(n,e.price),n.owned.push(e.blueprint),{ok:!0}):ho(t,e.give,e.count,i)?(fo(n,e.price),Sn(t,e.give,e.count,i),{ok:!0}):{ok:!1,reason:"full"}}var tu=(n,t,e)=>!!(n&&n[t.id]===e);function Sp(n,t,e,i,s,r,o=()=>64){if(tu(n,t,i))return{ok:!1,reason:"done"};if(e<t.need)return{ok:!1,reason:"need"};n[t.id]=i,vs(s,t.reward.coins|0);let l={};for(let a in t.reward.items||{}){let c=Sn(r,a,t.reward.items[a],o);c&&(l[a]=c)}return{ok:!0,coins:t.reward.coins|0,items:t.reward.items||{},leftovers:l}}function bp(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}var eu={survival:{db:"hw_world",seedOffset:0},creative:{db:"hw_creative",seedOffset:1}},Hl=n=>n==="creative"?"creative":"survival",wp=n=>eu[Hl(n)].db;function Ep(n,t,e){return n?n.isSet(e)?n.verify(t,e)?{ok:!0}:{ok:!1,reason:"wrong"}:{ok:!1,reason:"unset"}:{ok:!1,reason:"nopin"}}function Ap(n){let t=Hl(n)==="creative";return{creative:t,consume:!t,drops:!t,damage:!t,coins:!t,quizMobs:!t,portals:!t,trading:!t,breakTime:t?.08:null}}function Tp(n){return n.blocks.filter(t=>t.n&&t.placeable&&!["stele","bedrock","door_open"].includes(t.id)&&!t.portal&&!t.liquid&&!t.hidden).map(t=>t.id)}var Rp=["grass","stone_bricks","planks","glass","wool_red","paper_yellow","lantern","door","flower_rose"];var uu={};ss(uu,{BREED_CAP:()=>cu,LOVE_MS:()=>Ip,MAX_STAGE:()=>av,STAGE_SECONDS:()=>ov,armorMax:()=>Cp,armorPoints:()=>mo,canTill:()=>iu,eat:()=>lu,equip:()=>lv,findMate:()=>hu,harvest:()=>su,nearWater:()=>ru,reduceDamage:()=>au,stageAt:()=>nu,wearArmor:()=>ou});var ov=60,av=3;function nu(n,t,e){let i=Math.floor((t-n)/1e3/(e?30:60));return Math.max(0,Math.min(3,i))}var iu=(n,t)=>(n==="grass"||n==="dirt")&&t;function su(n,t=Math.random){return n>=3?[{id:"wheat",n:1},{id:"seeds",n:1+Math.floor(t()*2)}]:[{id:"seeds",n:1}]}function ru(n,t,e,i,s,r=4){for(let o=-r;o<=r;o++)for(let l=-r;l<=r;l++)for(let a of[0,-1])if(t(n(e+l,i+a,s+o)))return!0;return!1}function mo(n,t){return(n||[]).reduce((e,i)=>{let s=i&&t.get(i);return e+(s&&s.armor?s.armor.points:0)},0)}var Cp=(n,t)=>{let e=n&&t.get(n);return e&&e.armor?e.armor.dur||100:0};function ou(n,t,e,i=1){let s=[];return n.forEach((r,o)=>{if(!r)return;let l=(t[o]==null?Cp(r,e):t[o])-i;l<=0?(s.push(r),n[o]=null,t[o]=null):t[o]=l}),s}var au=(n,t)=>Math.max(0,Math.round(n*(1-Math.min(.8,t*.04))));function lv(n,t,e,i){let s=e&&i.get(e);if(e&&(!s||!s.armor||s.armor.slot!==t))return{ok:!1};let r=n[t]||null;return n[t]=e||null,{ok:!0,old:r}}function lu(n,t,e){return n.hp>=e?!1:(n.hp=Math.min(e,n.hp+t),!0)}var Ip=3e4,cu=12;function hu(n,t,e){return n.find(i=>i!==t&&!i.gone&&i.type===t.type&&i.love&&e-i.love<Ip&&Math.hypot(i.p.x-t.p.x,i.p.z-t.p.z)<8)||null}var mu={};ss(mu,{apply:()=>ql,duck:()=>es,muted:()=>go,rainLevel:()=>pu,scene:()=>du,setVolume:()=>Yl,sfx:()=>Rn,state:()=>cv,toggleMute:()=>fu,unlock:()=>Xl});var ze=null,Ms=null,Wl=null,hr=null,Un=()=>window.HIAudio||null,Lp=()=>Un()?Un().get():{muted:!1,music:.35,sfx:.7};function Xl(){try{Un()&&Un().unlock()}catch{}if(!ze){let n=window.AudioContext||window.webkitAudioContext;if(!n)return;ze=new n,Ms=ze.createGain(),Ms.connect(ze.destination),Wl=ze.createBuffer(1,ze.sampleRate,ze.sampleRate);let t=Wl.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}ze.state==="suspended"&&ze.resume(),ql()}function ql(){if(Ms){let n=Lp();Ms.gain.setTargetAtTime(n.muted?0:n.sfx,ze.currentTime,.03)}}var go=()=>Lp().muted;function fu(){return Un()&&Un().toggle(),ql(),go()}function Yl(n){Un()&&Un().set(n),ql()}function du(n){try{Un()&&Un().scene(n)}catch{}}function es(n){let t=Un();t&&(n&&es.id==null?es.id=t.duckStart():!n&&es.id!=null&&(t.duckEnd(es.id),es.id=null))}function Dp(n,t,e,i,s){n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(i,t+e),n.gain.exponentialRampToValueAtTime(1e-4,t+e+s)}function Vn(n,t,e,i,s,r,o){let l=ze.createOscillator(),a=ze.createGain();l.type=n,l.frequency.setValueAtTime(t,e),o&&l.frequency.exponentialRampToValueAtTime(o,e+i+r),Dp(a,e,i,s,r),l.connect(a),a.connect(Ms),l.start(e),l.stop(e+i+r+.05)}function ns(n,t,e,i,s,r=1){let o=ze.createBufferSource(),l=ze.createBiquadFilter(),a=ze.createGain();o.buffer=Wl,l.type=n,l.frequency.value=t,l.Q.value=r,Dp(a,e,.004,i,s),o.connect(l),l.connect(a),a.connect(Ms),o.start(e,Math.random()*.5),o.stop(e+s+.05)}var Pp={wood:(n,t)=>{Vn("sine",190*t,n,.003,.16,.12,95*t),ns("bandpass",700*t,n,.08,.08,2)},stone:(n,t)=>{ns("highpass",1800*t,n,.1,.06),Vn("triangle",140*t,n,.002,.08,.08,90*t)},sand:(n,t)=>{ns("lowpass",520*t,n,.12,.18)},glass:(n,t)=>{Vn("sine",1900*t,n,.002,.08,.25,1500*t),ns("highpass",4200,n,.06,.12)},soft:(n,t)=>{ns("bandpass",850*t,n,.09,.1,.8)}};function Rn(n,t="soft"){if(!ze||go())return;let e=ze.currentTime+.005,i=Pp[t]||Pp.soft;switch(n){case"break":i(e,1),i(e+.05,.8);break;case"hit":i(e,1.15);break;case"place":i(e,1.3);break;case"step":{ns(t==="stone"?"highpass":"bandpass",t==="stone"?1500:650,e,t==="sand"?.05:.035,.06);break}case"pickup":Vn("sine",880,e,.002,.07,.08,1320);break;case"chest":Vn("triangle",160,e,.02,.07,.3,120),Vn("sine",330,e+.12,.005,.05,.15);break;case"door":Vn("sawtooth",120,e,.03,.04,.3,160),ns("lowpass",400,e+.25,.08,.1);break;case"eat":[0,.13,.26].forEach(s=>ns("bandpass",1200+Math.random()*600,e+s,.07,.07,1.5));break;case"trade":Vn("triangle",659,e,.005,.08,.15),Vn("triangle",988,e+.1,.005,.08,.25);break;case"coin":Vn("sine",1319,e,.002,.08,.08),Vn("sine",1976,e+.07,.002,.08,.22);break;case"hurt":Vn("triangle",300,e,.005,.1,.18,200);break;default:break}}function pu(n){if(ze){if(!hr&&n>.01){let t=ze.createBufferSource(),e=ze.createBiquadFilter(),i=ze.createBiquadFilter(),s=ze.createGain();t.buffer=Wl,t.loop=!0,e.type="lowpass",e.frequency.value=2600,i.type="highpass",i.frequency.value=400,s.gain.value=0,t.connect(i),i.connect(e),e.connect(s),s.connect(Ms),t.start(),hr={s:t,g:s}}hr&&hr.g.gain.setTargetAtTime(.06*n,ze.currentTime,.4)}}var cv=()=>({ctx:ze?ze.state:"none",hi:Un()?Un().state():null,rain:hr?+hr.g.gain.value.toFixed(3):0});var Mu={};ss(Mu,{HI_SCENE:()=>xu,createWeather:()=>_u,precipFor:()=>vu,sceneFor:()=>gu,soundOf:()=>ur,stepWeather:()=>yu});function ur(n){if(!n)return"soft";let t=n.pattern||"";return t==="glass"||t==="stained"||t==="ice"?"glass":t==="sand"||t==="snow"||n.id==="sand"||n.id==="farmland"?"sand":n.tool==="axe"||t==="planks"||t==="log"||t==="door"?"wood":n.tool==="pickaxe"?"stone":"soft"}function gu({day:n,underground:t}){return t?"cave":n<.25?"night":"calm"}var xu={calm:"hub",night:"night",cave:"cave"};function _u(n=Math.random){return{kind:"clear",left:180+n()*300,level:0}}function yu(n,t,e=Math.random){n.left-=t,n.left<=0&&(n.kind==="clear"?(n.kind="rain",n.left=60+e()*90):(n.kind="clear",n.left=180+e()*300));let i=n.kind==="rain"?1:0;return n.level+=Math.sign(i-n.level)*Math.min(Math.abs(i-n.level),t/6),n}function vu(n,t){return!t||t.level<=.01||n==="desert"?null:n==="snow"?"snow":"rain"}var hv=[1,2,4,6,8];function $l(n,t){if(!n||n.hardness<0)return{time:1/0,harvest:!1,usesTool:!1};let e=.25+n.hardness*.55,i=n.tier|0,r=!!(t&&n.tool&&t.type===n.tool)?t.tier:0;return i>0&&r<i?{time:e*3,harvest:!1,usesTool:!!t&&t.type!=="sword"}:{time:Math.max(.1,e/hv[r]),harvest:!0,usesTool:!!t&&t.type!=="sword"}}function Zl(n,t,e,i=1){let s=n.slots[t];if(!s)return{broke:!1};let r=e.toolOf(s.id);if(!r)return{broke:!1};let o=r.durability;return s.dur=(s.dur==null?o:s.dur)-i,s.dur<=0?(n.slots[t]=null,{broke:!0,id:s.id}):{broke:!1,left:s.dur,max:o}}function Np(n,t){if(!n)return null;let e=t.toolOf(n.id),i=!e&&t.get(n.id),s=e?e.durability:i&&i.armor?i.armor.dur||100:0;if(!s)return null;let r=n.dur==null?s:n.dur;return{left:r,max:s,frac:r/s}}var Tu={};ss(Tu,{collect:()=>Eu,createFurnace:()=>Su,dismantle:()=>Au,start:()=>bu,tick:()=>wu});function Su(){return{fuel:0,jobs:[],done:{}}}function bu(n,t,e,i=4){if(ei(t,e.in)<1)return{ok:!1,reason:"materials"};let s=n.jobs.length;if(n.fuel-s<1){if(ei(t,"coal")<1)return{ok:!1,reason:"fuel"};co(t,"coal",1),n.fuel+=i}return co(t,e.in,1),n.jobs.push({in:e.in,out:e.out,left:e.time}),{ok:!0}}function wu(n,t){for(;t>0&&n.jobs.length;){let e=n.jobs[0],i=Math.min(t,e.left);e.left-=i,t-=i,e.left<=1e-9&&(n.jobs.shift(),n.fuel-=1,n.done[e.out]=(n.done[e.out]||0)+1)}return n}function Eu(n,t,e=()=>64){let i=0;for(let s of Object.keys(n.done)){let r=Sn(t,s,n.done[s],e);i+=n.done[s]-r,r?n.done[s]=r:delete n.done[s]}return i}function Au(n){let t=Object.assign({},n.done);for(let e of n.jobs)t[e.in]=(t[e.in]||0)+1;return t}var Nu={};ss(Nu,{MAX_HP:()=>xo,REGEN_EVERY:()=>fv,SAFE_FALL:()=>uv,createHealth:()=>Ru,damage:()=>Iu,fallDamage:()=>Cu,hearts:()=>Du,regen:()=>Pu,respawnPoint:()=>Lu});var xo=20,uv=4,fv=4;function Ru(n=20){return{hp:Math.max(0,Math.min(20,n)),regenT:0}}function Cu(n,{water:t=!1,flying:e=!1}={}){return t||e||n<=4?0:Math.floor((n-4)/2)+1}function Iu(n,t){return t>0&&(n.hp=Math.max(0,n.hp-t),n.regenT=0),n.hp<=0}function Pu(n,t){return n.hp<=0||n.hp>=20?(n.regenT=0,!1):(n.regenT+=t,n.regenT>=4?(n.regenT-=4,n.hp=Math.min(20,n.hp+1),!0):!1)}function Lu(n,t,e){return n&&e?{x:n.x+.5,y:n.y+1,z:n.z+.5}:{x:t.x,y:t.y,z:t.z}}function Du(n){let t=[];for(let e=0;e<20/2;e++){let i=n-e*2;t.push(i>=2?"full":i===1?"half":"empty")}return t}var Jl={animal:8,quiz:4};function Up(){return{list:[],nextId:1}}var _o=(n,t)=>n.list.reduce((e,i)=>e+(i.kind===t&&!i.gone?1:0),0);function Fp(n,t,e){let i={id:n.nextId++,type:t.id,kind:t.kind,def:t,p:{x:e.x,y:e.y,z:e.z},v:{x:0,y:0,z:0},yaw:0,hp:t.hp||2,t:0,turn:0,gone:!1,busy:!1,onGround:!1};return n.list.push(i),i}function Op(n,t){return n<.2&&!t}function Bp(n,t,e){return n.tame?!1:n.kind==="quiz"?t>.45||e>48:e>72}function zp(n,t,e,i){let s=n.def,r=t.x-n.p.x,o=t.z-n.p.z,l=Math.hypot(r,o);if(n.t+=e,n.busy){n.v.x=0,n.v.z=0,n.kind==="villager"&&(n.yaw=Math.atan2(-r,-o));return}if(n.home){let a=n.home.x-n.p.x,c=n.home.z-n.p.z,u=Math.hypot(a,c);if(u>10){n.yaw=Math.atan2(-a,-c),n.v.x=a/u*s.speed,n.v.z=c/u*s.speed,n.t=0,n.turn=1;return}}if(n.kind==="quiz"&&l<16){n.yaw=Math.atan2(-r,-o);let a=l>1.6?s.speed:0;n.v.x=r/(l||1)*a,n.v.z=o/(l||1)*a;return}n.t>=n.turn&&(n.t=0,n.turn=2+i()*4,i()<.35?(n.v.x=0,n.v.z=0):(n.yaw=i()*Math.PI*2,n.v.x=-Math.sin(n.yaw)*s.speed,n.v.z=-Math.cos(n.yaw)*s.speed))}function kp(n,t,e){if(n.kind!=="animal"||n.gone)return null;if(n.hp-=t?n.hp:1,n.hp>0)return{drops:null};n.gone=!0;let i=n.def.drops||{},s=(i.min||1)+Math.floor(e()*((i.max||1)-(i.min||1)+1));return{drops:i.id?{id:i.id,n:s}:null}}var Vp=(n,t)=>n?(t?2:1)+1:0;function Gp(n,t,e,i,s){let r=[e.x-i/2,e.y,e.z-i/2],o=[e.x+i/2,e.y+s,e.z+i/2],l=[n.x,n.y,n.z],a=[t.x,t.y,t.z],c=0,u=1/0;for(let h=0;h<3;h++){if(Math.abs(a[h])<1e-9){if(l[h]<r[h]||l[h]>o[h])return null;continue}let f=(r[h]-l[h])/a[h],m=(o[h]-l[h])/a[h];if(f>m&&([f,m]=[m,f]),c=Math.max(c,f),u=Math.min(u,m),c>u)return null}return c}function Hp(n){return Object.keys(n||{}).filter(t=>n[t]&&!n[t].d).sort((t,e)=>(n[e].u||0)-(n[t].u||0))}var Wp=n=>`../hero-island/?map=${encodeURIComponent(n)}&from=world`;function Xp(n,t){let e=new Set(t||[]);return(Array.isArray(n)?n:[]).filter(i=>i&&i.id&&!e.has(i.id))}function qp(n,t,e,i,s=()=>64){let r=(t||[]).find(c=>c.map===n.map);if(!r)return{ok:!1,coins:0,items:{},leftovers:{}};let o=r.reward.coins|0,l=Object.assign({},r.reward.items),a={};vs(i,o);for(let c in l){let u=Sn(e,c,l[c],s);u&&(a[c]=u)}return{ok:!0,coins:o,items:l,leftovers:a,name_zh:r.name_zh}}function Yp(n,t,e){let i=new Set;for(let r of Array.isArray(n)?n:[])r&&r.map&&i.add(r.map);let s=t&&t.defeated;if(s)for(let r of e||[])r.boss&&s[r.boss]&&i.add(r.map);return i}function Uu(n,t,e){let i=(t||[]).findIndex(r=>r.map===n);if(i<0)return{ok:!1,need:null};if(i===0)return{ok:!0};let s=t[i-1];return e.has(s.map)?{ok:!0}:{ok:!1,need:s}}function $p(n,t){let e=(n||[]).findIndex(i=>!t.has(i.map));return e<=0?null:Uu(n[e].map,n,t).ok?n[e]:null}var mi={};function fr(n){return mi[n]||(mi[n]=new Bn({color:n,transparent:!0}),mi[n].userData.base=new ie(n)),mi[n]}var yo=null;function mv(){if(yo)return yo;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");return t.fillStyle="#26302A",t.fillRect(0,0,64,64),t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(20,28,8,10,0,0,7),t.ellipse(44,28,8,10,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(22,31,4,0,7),t.arc(46,31,4,0,7),t.fill(),t.fillStyle="#E0352B",t.font="bold 18px sans-serif",t.textAlign="center",t.fillText("?",32,58),yo=new ui(n),yo.colorSpace=on,yo}function Zp(n,t){let e=new On,i=n.colors,[s,r]=n.size,o=(a,c,u,h,f,m,_,v)=>{let p=new We(new vn(a,c,u),v||fr(h));return p.position.set(f,m,_),e.add(p),p},l=[];if(n.kind==="villager"){for(let c of[-.13,.13]){let u=o(.2,.6,.22,i.leg,c,.6,0);u.geometry.translate(0,-.6/2,0),l.push(u)}o(.56,.78,.34,t||i.body,0,.6+.39,0);for(let c of[-.36,.36])o(.16,.62,.18,t||i.body,c,1.3399999999999999,0).geometry.translate(0,-.27,0);o(.42,.42,.4,i.head,0,.6+.78+.22,0),o(.5,.1,.48,i.hat,0,.6+.78+.46,0),o(.32,.14,.3,i.hat,0,.6+.78+.56,0),o(.08,.12,.06,"#C9A27A",0,.6+.78+.18,-.22)}else if(n.kind==="quiz"){let a=o(s,r*.72,s*.8,i.body,0,r*.36+.12,0);mi.__face||(mi.__face=new Bn({map:mv(),transparent:!0}),mi.__face.userData.base=new ie("#ffffff"));let c=[fr(i.head),fr(i.head),fr(i.head),fr(i.head),fr(i.head),mi.__face],u=new We(new vn(s*.9,s*.8,s*.8),c);u.position.set(0,r*.72+s*.4,0),e.add(u),l.push(o(.18,.24,.18,i.head,-.2,.12,0),o(.18,.24,.18,i.head,.2,.12,0))}else{let a=n.id==="chicken"?.25:.45,c=r-a-(n.id==="chicken"?.15:.25);o(s,c,n.id==="chicken"?s:s*1.35,i.body,0,a+c/2,0),i.patch&&o(s*.5,c*.55,.02+s*1.36,i.patch,s*.12,a+c*.55,0);let u=n.id==="chicken"?.3:.45,h=o(u,u,u,i.head,0,a+c+u*.25,-(n.id==="chicken"?s*.35:s*.75));i.comb&&(o(.08,.12,.14,i.comb,0,h.position.y+u/2+.05,h.position.z),o(.12,.06,.12,"#D9A63A",0,h.position.y-.02,h.position.z-u/2-.05));let f=n.id==="chicken"?.06:.18,m=n.id==="chicken"?0:s*.45,_=s*.3;for(let[v,p]of n.id==="chicken"?[[-.1,0],[.1,0]]:[[-_,-m],[_,-m],[-_,m],[_,m]]){let x=o(f,a,f,i.leg,v,a/2,p);x.geometry.translate(0,-a/2,0),x.position.y=a,l.push(x)}}return e.userData.legs=l,e}function Jp(n){for(let t in mi){let e=mi[t];e.color.copy(e.userData.base).multiplyScalar(n)}}function Kl(n,t,e){n.position.set(t.p.x,t.p.y,t.p.z),n.rotation.y=t.yaw;let i=Math.hypot(t.v.x,t.v.z)>.05,s=i?Math.sin(e*8+t.id)*.5:0;if(n.userData.legs.forEach((r,o)=>{r.rotation.x=o%2?s:-s}),t.kind==="quiz"&&(n.position.y+=Math.sin(e*3+t.id)*.05),t.gone){let r=Math.max(.01,1-t.goneT*3);n.scale.setScalar(r),n.rotation.y+=t.goneT*12}}var jl="c41bd036e6",Bu=new URLSearchParams(location.search),_v=720,Fu=5,jp={boat:-.85,minecart:-.6,horse:.75},yv=[[0,0,0,1,.1,1]],vv=20261008,Mv=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,d={touch:Mv,started:!1,paused:!0,overlay:null,p:{x:.5,y:40,z:.5},v:{x:0,y:0,z:0},yaw:0,pitch:-.2,fly:!1,onGround:!1,eyeOff:0,view:"fp",sel:0,time:.08,keys:{},joy:{x:0,y:0,active:!1},jumpHeld:!1,downHeld:!1,mining:{active:!1,src:"center",sx:0,sy:0,k:"",t:0},placeRepeat:0,dirty:new Set,dirtyMeta:!1,frames:[],drops:[]};function Ql(n,t){try{let e=localStorage.getItem(n);return e??t}catch{return t}}function Ou(n,t){try{localStorage.setItem(n,t)}catch{}}async function Sv(){let n=Hl(Ql("hw_mode","survival")),t=Ap(n);dp(wp(n));let[e,i,s,r,o,l]=await Promise.all(["data/blocks.json","data/recipes.json","data/mobs.json","data/portals.json","data/structures.json","data/trades.json"].map(g=>fetch(g,{cache:"no-cache"}).then(R=>R.json()))),a=Fd(e),c=i.recipes||[],u=g=>a.maxStack(g),h={};try{let[g,R,B,z,W,et,pt,mt,dt]=await Promise.all(["hw_meta","hw_player","hw_inventory","hw_coins","hw_furnaces","hw_portal_claimed","hw_quests","hw_chests","hw_crops"].map(Jh));h={meta:g,player:R,inv:B,coins:z,furnaces:W,claimed:et,quests:pt,chests:mt,crops:dt,chunks:await mp("hw_chunk:")}}catch(g){console.warn("save unavailable",g)}let f=h.meta&&h.meta.seed||vv+eu[n].seedOffset,m=Hd(f,a,o),_=sp(Object.fromEntries(Object.entries(h.chunks||{}).map(([g,R])=>[g.slice(9),R]))),v=h.inv?Bl(h.inv):lo();t.creative&&!h.inv&&Rp.forEach((g,R)=>{a.get(g)&&(v.slots[R]={id:g,count:64})});let p=np(h.coins),x=Ru(h.player&&h.player.hp!=null?h.player.hp:20);d.bed=h.player&&h.player.bed||null,d.horse=h.player&&h.player.horse||null;let T=r.portals||[],L=Array.isArray(h.claimed)?h.claimed.slice():[],b=h.furnaces||{},A=h.quests||{},E=Object.fromEntries(Object.entries(h.chests||{}).map(([g,R])=>[g,Bl(R,27)])),D=h.crops||{};d.armor=h.player&&Array.isArray(h.player.armor)?h.player.armor.slice(0,4):[null,null,null,null],d.armorDur=h.player&&Array.isArray(h.player.armorDur)?h.player.armorDur.slice(0,4):[null,null,null,null];let M=i.smelt||[],w=i.fuelPerCoal||4;h.meta&&typeof h.meta.time=="number"&&(d.time=h.meta.time);let C=Ci("#c"),N=new Pl({canvas:C,antialias:!1,powerPreference:"high-performance"});N.setPixelRatio(Math.min(window.devicePixelRatio||1,d.touch?1.5:1.25));let X=new Dr,U=new ie("#EFEBDD");X.background=U;let P=new pn(72,1,.08,200);P.rotation.order="YXZ";let k=op(a),Z=ap(a,k),K=fp(k.canvas),st=new Worker("assets/hw-worker.js?v="+jl),O=new Vl({scene:X,mats:K,reg:a,worker:st,diffs:_,onDirty:g=>d.dirty.add(g)}),ot=Math.max(2,Math.min(6,parseInt(Bu.get("rd")||Ql("hw_rd",d.touch?"3":"4"),10)||4));O.setRenderDistance(ot),P.far=ot*16+40,P.updateProjectionMatrix();let it=await new Promise(g=>{let R=B=>{B.data.type==="ready"&&(st.removeEventListener("message",R),g(B.data.spawn))};st.addEventListener("message",R),st.postMessage({type:"init",seed:f,blocks:e,structures:o,diffs:Object.fromEntries([..._].map(([B,z])=>[B,Yh(z)]))})});h.player?Object.assign(d,{p:{x:h.player.x,y:h.player.y,z:h.player.z},yaw:h.player.yaw||0,pitch:h.player.pitch||0,fly:!!h.player.fly,sel:h.player.sel|0}):(d.p={x:it.x,y:it.y,z:it.z},d.yaw=Math.atan2(-(it.stele.x+.5-it.x),-(it.stele.z+.5-it.z)),d.pitch=-.15);let Mt=new fs(new Vr(new vn(1.004,1.004,1.004)),new us({color:1382164,transparent:!0,opacity:.45}));Mt.visible=!1,X.add(Mt);let gt=lp().map(g=>new ui(g)),vt=new We(new vn(1.01,1.01,1.01),new Bn({map:gt[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));vt.visible=!1,X.add(vt);let bt=(g,R)=>{let B=document.createElement("canvas");B.width=B.height=64;let z=B.getContext("2d");z.fillStyle=g,z.beginPath(),z.arc(32,32,28,0,7),z.fill(),R&&(z.globalCompositeOperation="destination-out",z.beginPath(),z.arc(44,26,24,0,7),z.fill());let W=new ui(B);return W.colorSpace=on,W},_t=new hs(new Wi({map:bt("#F2C46B"),depthWrite:!1,fog:!1})),$=new hs(new Wi({map:bt("#EDE6D0",!0),depthWrite:!1,fog:!1}));X.add(_t,$);let nt=500,xt=new Float32Array(nt*6),Lt=new Float32Array(nt*3),ft=new Float32Array(nt*3);for(let g=0;g<nt;g++)ft[g*3]=Math.random()*24-12,ft[g*3+1]=Math.random()*16,ft[g*3+2]=Math.random()*24-12;let Ft=new tn;Ft.setAttribute("position",new Ye(xt,3));let jt=new fs(Ft,new us({color:9414574,transparent:!0,opacity:.55,depthWrite:!1}));jt.frustumCulled=!1,jt.visible=!1,X.add(jt);let Ht=new tn;Ht.setAttribute("position",new Ye(Lt,3));let Zt=new Br(Ht,new Ks({color:16052712,size:.13,transparent:!0,opacity:.9,depthWrite:!1}));Zt.frustumCulled=!1,Zt.visible=!1,X.add(Zt),d.weather=_u();let ae=0;function Wt(g,R,B){if(jt.visible=B==="rain",Zt.visible=B==="snow",!!B){ae+=g;for(let z=0;z<nt;z++){let W=ft[z*3],et=ft[z*3+2],pt=B==="rain"?16:1.6,mt=R.y+10-(ft[z*3+1]+ae*pt)%16;if(B==="rain"){let dt=z*6;xt[dt]=xt[dt+3]=R.x+W,xt[dt+2]=xt[dt+5]=R.z+et,xt[dt+1]=mt,xt[dt+4]=mt-.45}else{let dt=z*3,wt=Math.sin(ae*.8+z)*.4;Lt[dt]=R.x+W+wt,Lt[dt+1]=mt,Lt[dt+2]=R.z+et+wt*.6}}(B==="rain"?Ft:Ht).attributes.position.needsUpdate=!0}}let ee=new On,Se=(g,R,B,z,W,et,pt)=>{let mt=new We(new vn(g,R,B),new Bn({color:z}));return mt.position.set(W,et,pt),mt.userData.base=new ie(z),ee.add(mt),mt},Xe=Se(.24,.75,.26,"#26302A",-.14,.375,0),Ee=Se(.24,.75,.26,"#26302A",.14,.375,0);Se(.56,.7,.3,"#2F5A34",0,1.1,0);let Le=Se(.18,.66,.2,"#E7CDA6",-.38,1.12,0),H=Se(.18,.66,.2,"#E7CDA6",.38,1.12,0);Se(.46,.42,.42,"#E7CDA6",0,1.66,0),Se(.5,.14,.46,"#151714",0,1.9,.02),Se(.12,.12,.05,"#E0352B",.16,1.92,-.24),[Xe,Ee,Le,H].forEach(g=>{g.geometry.translate(0,-g.geometry.parameters.height/2+.05,0),g.position.y+=g.geometry.parameters.height/2-.05}),ee.visible=!1,X.add(ee);let Fe={},_e=g=>Fe[g]||(Fe[g]=(()=>{let R=new Image;R.src=Z[g];let B=new cn(R);return B.colorSpace=on,R.onload=()=>{B.needsUpdate=!0},new Wi({map:B,depthWrite:!0,alphaTest:.3})})());function I(g,R,B,z){let W=new hs(_e(g));W.scale.set(.42,.42,1),X.add(W),d.drops.push({id:g,s:W,p:{x:R,y:B,z},v:{x:(Math.random()-.5)*2,y:3,z:(Math.random()-.5)*2},age:0})}let y=(g,R,B)=>{let z=O.get(g,R,B);return a.flat.solid[z]===1&&(a.flat.boxes[z]||!0)},Y=Object.fromEntries((s.mobs||[]).map(g=>[g.id,g])),j=Up(),at=new Map,St=0;function Et(g,R){for(let B=61;B>0;B--){let z=O.get(g,B,R);if(a.flat.solid[z])return O.get(g,B+1,R)||O.get(g,B+2,R)?null:{y:B+1,n:z};if(a.flat.liquid[z])return null}return null}function ct(g,R,B,z=7){for(let W=-z;W<=z;W++)for(let et=-z;et<=z;et++)for(let pt=-z;pt<=z;pt++)if(a.flat.lightEmit[O.get(g+pt,R+W,B+et)])return!0;return!1}function ht(g,R,B,z,W){let et=Fp(j,g,{x:R+.5,y:B,z:z+.5}),pt=Zp(g,W);return at.set(et.id,pt),X.add(pt),et}let Tt=new Set;function qt(){for(let g of m.villages.around(d.p.x-64,d.p.z-64,d.p.x+64,d.p.z+64))if(!(Tt.has(g.id)||!O.ready(g.x,g.z))){Tt.add(g.id);for(let R=0;R<g.villagers;R++){let B=vp(g.id,R,l),z=g.x+(R%2?2:-2),W=g.z+(R-1),et=Et(z,W),pt=ht(Y.villager,z,et?et.y:g.y+1,W,B.prof.color);Object.assign(pt,{home:{x:g.x,z:g.z},village:g.id,role:B})}}}function Pt(g){if(Y.villager&&qt(),d.horse&&!d.horseMob&&Y.horse&&O.ready(d.horse.x,d.horse.z)){let pt=ht(Y.horse,Math.floor(d.horse.x),d.horse.y,Math.floor(d.horse.z));pt.tame=!0,d.horse.saddled&&mr(pt),d.horseMob=pt}let R=Math.random()*Math.PI*2,B=14+Math.random()*14,z=Math.floor(d.p.x+Math.cos(R)*B),W=Math.floor(d.p.z+Math.sin(R)*B);if(!O.ready(z,W))return;let et=Et(z,W);if(et)if(_o(j,"animal")<Jl.animal&&et.n===a.num("grass")&&g>.3){let pt=Object.values(Y).filter(wt=>wt.kind==="animal"&&(!wt.biome||wt.biome===m.biomeOf(z,W))),mt=pt[Math.floor(Math.random()*pt.length)],dt=1+Math.floor(Math.random()*3);for(let wt=0;wt<dt&&_o(j,"animal")<Jl.animal;wt++){let $t=z+wt%2,le=W+(wt>>1),Me=Et($t,le);Me&&ht(mt,$t,Me.y,le)}}else t.quizMobs&&_o(j,"quiz")<Jl.quiz&&Op(g,ct(z,et.y,W))&&Y.quizling&&ht(Y.quizling,z,et.y,W)}function Rt(g,R,B){St+=g,St>2.5&&d.started&&(St=0,Pt(R));for(let z=j.list.length-1;z>=0;z--){let W=j.list[z],et=at.get(W.id),pt=Math.hypot(W.p.x-d.p.x,W.p.z-d.p.z);if(W.riding){W.p.x=d.p.x,W.p.y=d.p.y,W.p.z=d.p.z,W.yaw=d.yaw,W.v.x=d.v.x,W.v.z=d.v.z,Kl(et,W,B/1e3);continue}if(W.gone){W.goneT=(W.goneT||0)+g,Kl(et,W,B/1e3),W.goneT>.35&&(X.remove(et),at.delete(W.id),j.list.splice(z,1));continue}if(Bp(W,R,pt)){W.gone=!0,W.goneT=0,W.village&&Tt.delete(W.village);continue}if(!O.ready(W.p.x,W.p.z))continue;zp(W,d.p,g,Math.random),W.v.y-=20*g,W.v.y<-20&&(W.v.y=-20);let mt=Nl(W.p,W.v,g,y,{w:Math.min(.9,W.def.size[0]),h:W.def.size[1],canStep:!0,grounded:W.onGround});W.onGround=mt.onGround,a.flat.liquid[O.get(W.p.x,W.p.y+.3,W.p.z)]&&(W.v.y=2),Kl(et,W,B/1e3)}Jp(.35+.65*R)}function Xt(g,R,B){let z,W;g==="screen"?(Oe.set(R/innerWidth*2-1,-(B/innerHeight)*2+1,.5).unproject(P).sub(P.position).normalize(),z={x:P.position.x,y:P.position.y,z:P.position.z},W={x:Oe.x,y:Oe.y,z:Oe.z}):(z=Je(),W=Ot());let et=g==="screen"?Ze("screen",R,B):Ze("center"),pt=null,mt=d.view==="tp"&&g==="screen"?8:4.5;et&&(mt=Math.min(mt,et.dist+.5));for(let dt of j.list){if(dt.gone||dt.riding)continue;let wt=Gp(z,W,dt.p,dt.def.size[0],dt.def.size[1]);wt!=null&&wt<mt&&(mt=wt,pt=dt)}return pt}function Jt(){try{return Hp(JSON.parse(localStorage.getItem("ke_mistakes")||"{}"))}catch{return[]}}function se(g){if(g.type==="horse"){Qp(g);return}if(g.kind==="villager"){if(!t.trading){lt("\u5275\u9020\u6A21\u5F0F\u88E1\u6751\u6C11\u4E0D\u505A\u751F\u610F\uFF0C\u6771\u897F\u90FD\u5728\u80CC\u5305\u76EE\u9304\u88E1");return}Bt(g);return}if(g.kind==="animal"&&v.slots[d.sel]&&v.slots[d.sel].id==="wheat"){t.consume&&Ai(v,d.sel,1),me();let B=Date.now();g.love=B,lt(`${g.def.name_zh}\u5403\u4E86\u5C0F\u9EA5\uFF0C\u597D\u958B\u5FC3`);let z=hu(j.list,g,B);if(z&&_o(j,"animal")<cu){let W=ht(g.def,Math.floor((g.p.x+z.p.x)/2),Math.floor(g.p.y),Math.floor((g.p.z+z.p.z)/2));at.get(W.id).scale.setScalar(.65),g.love=0,z.love=0,lt(`\u751F\u4E86\u4E00\u96BB\u5C0F${g.def.name_zh}\uFF01`),d.stats.bred=(d.stats.bred||0)+1}else z&&lt("\u52D5\u7269\u592A\u591A\u4E86\uFF0C\u5148\u4E0D\u751F");return}if(g.kind==="animal"){let B=v.slots[d.sel],z=!!(B&&a.toolOf(B.id)&&a.toolOf(B.id).type==="sword"),W=kp(g,z,Math.random);if(g.v.y=4,g.v.x+=(g.p.x-d.p.x)*1.5,g.v.z+=(g.p.z-d.p.z)*1.5,z){let et=Zl(v,d.sel,a);et.broke&&lt(`\u4F60\u7684${a.name(et.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),me()}if(W&&W.drops)for(let et=0;et<W.drops.n;et++)I(W.drops.id,g.p.x,g.p.y+.6,g.p.z);return}if(g.busy)return;g.busy=!0,sn(),document.pointerLockElement&&document.exitPointerLock(),d.overlay="ask";let R=Jt().slice(0,30).sort(()=>Math.random()-.5);_p(q.ov,{ids:R,onDone:(B,z)=>{if(d.overlay=null,g.busy=!1,B){let W=Vp(!0,z);vs(p,W),ut(),g.gone=!0,g.goneT=0,lt(`\u6253\u6557\u932F\u984C\u602A\uFF01 +${W} \u91D1\u5E63`),d.dirtyMeta=!0,In(),d.stats.quizWins=(d.stats.quizWins||0)+1}else if(B===!1){let W=d.p.x-g.p.x,et=d.p.z-g.p.z,pt=Math.hypot(W,et)||1;d.v.x=W/pt*7,d.v.z=et/pt*7,d.v.y=4.5,g.p.x-=W/pt*1.5,g.p.z-=et/pt*1.5,lt("\u88AB\u932F\u984C\u602A\u63A8\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01")}}})}let V=(g,R,B)=>O.get(g,R,B),At=(g,R,B)=>{let z=a.get(O.get(g,R,B));return z&&z.rail?{shape:z.rail,powered:!!z.powered}:null},q=bv();function lt(g){let R=F("div",{class:"toast"},g);q.toasts.append(R),setTimeout(()=>R.remove(),2200)}let Nt=p.coins;function ut(){p.coins>Nt&&Rn("coin"),Nt=p.coins,q.coins.textContent=p.coins}let Yt="";function zt(){let g=Du(x.hp),R=g.join();R!==Yt&&(Yt=R,q.hearts.innerHTML="",g.forEach(B=>q.hearts.append(F("i",{class:"ht "+B}))))}function Ie(g){if(d.dead||g<=0||!t.damage)return;let R=g,B=mo(d.armor,a);if(g=au(g,B),B&&(ou(d.armor,d.armorDur,a,R).forEach(et=>lt(`\u4F60\u7684${a.name(et)}\u7A7F\u820A\u4E86\uFF0C\u8F15\u8F15\u88C2\u958B\u56C9\u3002\u518D\u505A\u4E00\u4EF6\u65B0\u7684\u5427\uFF01`)),Es(),d.dirtyMeta=!0),g<=0)return;let z=Iu(x,g);zt(),d.dirtyMeta=!0,Rn("hurt"),q.flash.classList.remove("on"),q.flash.offsetWidth,q.flash.classList.add("on"),z&&be()}function be(){wo(!0),d.dead=!0,sn(),document.pointerLockElement&&document.exitPointerLock(),d.overlay="dead";let g=q.ov;g.innerHTML="",g.hidden=!1,g.append(F("div",{class:"panel start"},F("h2",{},"\u4F60\u6688\u5012\u4E86\uFF01"),F("p",{},"\u5225\u64D4\u5FC3\uFF0C\u80CC\u5305\u88E1\u7684\u6771\u897F\u90FD\u9084\u5728\u3002"),F("button",{class:"btn big",onclick:Cn},d.bed?"\u56DE\u5230\u5E8A\u908A":"\u56DE\u5230\u51FA\u751F\u9EDE")))}function Cn(){let g=Lu(d.bed,it,!!d.bed);d.p={x:g.x,y:g.y,z:g.z},d.v={x:0,y:0,z:0},d.fallTop=g.y,x.hp=20,d.dead=!1,zt(),Qt(),d.dirtyMeta=!0,lt(d.bed?"\u5728\u5E8A\u908A\u9192\u4F86\u4E86":"\u56DE\u5230\u51FA\u751F\u9EDE\u4E86")}function me(){q.hotbar.innerHTML="";for(let R=0;R<9;R++){let B=v.slots[R];q.hotbar.append(F("button",{class:"slot"+(R===d.sel?" on":""),"aria-label":B?a.name(B.id):"\u7A7A\u683C",onpointerdown:z=>{z.stopPropagation(),d.sel=R,me()}},B?F("img",{src:Z[B.id],alt:""}):null,B&&B.count>1?F("span",{class:"cnt"},B.count):null,vo(B),F("span",{class:"key"},R+1)))}let g=v.slots[d.sel];q.selName.textContent=g?a.name(g.id):""}function vo(g){let R=Np(g,a);return!R||R.left>=R.max?null:F("span",{class:"dur"+(R.frac<.25?" low":"")},F("i",{style:"width:"+Math.round(R.frac*100)+"%"}))}function tc(g=4){let R=new Set,B=Math.floor(d.p.x),z=Math.floor(d.p.y),W=Math.floor(d.p.z);for(let et=-g;et<=g;et++)for(let pt=-g;pt<=g;pt++)for(let mt=-g;mt<=g;mt++){let dt=O.get(B+mt,z+et,W+pt);dt&&R.add(a.get(dt).id)}return R}let Ss=()=>({near:tc(),owned:new Set(p.owned)}),dr=-1,Gn=null,is=null,Ii=g=>g==="inv"?v:g==="chest"?E[is]:null,ni=(g,R)=>g==="armor"?d.armor[R]?{id:d.armor[R],count:1,dur:d.armorDur[R]}:null:Ii(g).slots[R];function bs(g,R,B){if(!Gn){ni(g,R)&&(Gn={c:g,i:R}),B();return}let z=Gn;if(Gn=null,z.c===g&&z.i===R){B();return}if(g==="armor"||z.c==="armor"){let[W,et,pt,mt]=g==="armor"?[z.c,z.i,g,R]:[g,R,z.c,z.i];if(W==="armor"){B();return}let dt=Ii(W),wt=dt.slots[et],$t=wt&&a.get(wt.id),le=d.armor[mt];if(wt&&!($t.armor&&$t.armor.slot===mt)){lt("\u9019\u500B\u4E0D\u80FD\u7A7F\u5728\u9019\u88E1"),B();return}let Me=d.armorDur[mt],qe=le?Number.isFinite(Me)?{id:le,count:1,dur:Me}:{id:le,count:1}:null;wt?(d.armor[mt]=wt.id,d.armorDur[mt]=Number.isFinite(wt.dur)?wt.dur:null,wt.count>1?(wt.count--,qe&&Sn(dt,le,1,u)):dt.slots[et]=qe):le&&(d.armor[mt]=null,d.armorDur[mt]=null,dt.slots[et]=qe),Es(),d.dirtyMeta=!0,me(),B();return}z.c===g?Hh(Ii(g),z.i,R,u):Xh(Ii(z.c),z.i,Ii(g),R,u),d.dirtyMeta=!0,me(),B()}let Pi=(g,R,B,z="")=>{let W=ni(g,R),et=Gn&&Gn.c===g&&Gn.i===R;return F("button",{class:"slot"+(et?" pick":"")+z,title:W?a.name(W.id):"",onclick:()=>bs(g,R,B)},W?F("img",{src:Z[W.id],alt:""}):null,W&&W.count>1?F("span",{class:"cnt"},W.count):null,vo(W))},Mo=["\u982D","\u8EAB","\u817F","\u8173"];function ws(g){let R=mo(d.armor,a);return F("div",{class:"armor-row"},Mo.map((B,z)=>F("div",{class:"armor-slot"},Pi("armor",z,g),F("small",{},B))),F("small",{class:"muted"},`\u8B77\u7532 ${R} \u9EDE\uFF08\u53D7\u50B7\u5C11 ${Math.min(80,R*4)}%\uFF09`))}function Es(){if(q.armor){let g=mo(d.armor,a);q.armor.textContent=g?`\u8B77\u7532 ${g}`:""}}function gi(){let g=q.ov;g.innerHTML="",g.hidden=!1;let R=E[is]||(E[is]=lo(27)),B=F("div",{class:"inv-grid"});for(let et=0;et<27;et++)B.append(Pi("chest",et,gi));let z=F("div",{class:"inv-grid"});for(let et=9;et<36;et++)z.append(Pi("inv",et,gi));let W=F("div",{class:"inv-grid hbrow"});for(let et=0;et<9;et++)W.append(Pi("inv",et,gi," hb"));return g.append(F("div",{class:"panel inv"},F("div",{class:"p-head"},F("h2",{},"\u7BB1\u5B50"),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Qt},"\xD7")),F("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u642C\u904E\u53BB\uFF08\u7BB1\u5B50 \u2194 \u80CC\u5305\uFF09\u3002"),B,F("h3",{},"\u80CC\u5305"),z,W)),R}function Li(){let g=q.ov;g.innerHTML="",g.hidden=!1;let R=F("div",{class:"inv-grid"}),B=mt=>Pi("inv",mt,Li,mt<9?" hb":"");for(let mt=9;mt<36;mt++)R.append(B(mt));let z=F("div",{class:"inv-grid hbrow"});for(let mt=0;mt<9;mt++)z.append(B(mt));let W=F("div",{class:"craft"},F("h3",{},"\u5408\u6210"));if(t.creative){let mt=F("div",{class:"craft"},F("h3",{},"\u65B9\u584A\u76EE\u9304\uFF08\u7121\u9650\uFF09"),F("p",{class:"muted"},"\u9EDE\u4E00\u4E0B\u5C31\u653E\u9032\u5FEB\u6377\u5217\u76EE\u524D\u9078\u7684\u90A3\u683C\u3002")),dt=F("div",{class:"cat-grid"});Tp(a).forEach(wt=>dt.append(F("button",{class:"slot",title:a.name(wt),onclick:()=>{v.slots[d.sel]={id:wt,count:64},d.dirtyMeta=!0,me(),Li(),lt(`${a.name(wt)} \u653E\u9032\u7B2C ${d.sel+1} \u683C`)}},F("img",{src:Z[wt],alt:""})))),mt.append(dt),g.append(F("div",{class:"panel inv"},F("div",{class:"p-head"},F("h2",{},"\u80CC\u5305\uFF08\u5275\u9020\u6A21\u5F0F\uFF09"),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Qt},"\xD7")),F("div",{class:"inv-wrap"},F("div",{},F("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002"),R,z),mt)));return}let et=Ss(),pt={needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"};c.forEach(mt=>{let dt=zl(v,mt,et),wt=dt.ok;mt.blueprint&&dt.reason==="blueprint"&&!Object.keys(mt.in).some($t=>$t!=="stick"&&ei(v,$t)>0)||W.append(F("div",{class:"rcp"+(wt?"":" no")},F("img",{src:Z[mt.out.id],alt:""}),F("div",{class:"rcp-t"},F("b",{},`${mt.name_zh} \xD7${mt.out.count}`),F("small",{},Object.keys(mt.in).map($t=>`${a.name($t)} ${ei(v,$t)}/${mt.in[$t]}`).join("\u3001")+(pt[dt.reason]?"\u3000\xB7 "+pt[dt.reason]:""))),F("button",{class:"btn small",onclick:()=>{let $t=Wh(v,mt,u,Ss());$t.ok?(lt(`\u505A\u597D\u4E86\uFF1A${mt.name_zh} \xD7${mt.out.count}`),d.dirtyMeta=!0):lt({full:"\u80CC\u5305\u6EFF\u4E86",needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"}[$t.reason]||"\u6750\u6599\u4E0D\u5920"),Li(),me()}},"\u88FD\u4F5C")))}),g.append(F("div",{class:"panel inv"},F("div",{class:"p-head"},F("h2",{},"\u80CC\u5305"),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Qt},"\xD7")),F("div",{class:"inv-wrap"},F("div",{},F("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002\u4E0A\u9762\u662F\u76D4\u7532\uFF1A\u628A\u76D4\u7532\u9EDE\u5230\u5C0D\u7684\u683C\u5B50\u5C31\u7A7F\u4E0A\u3002"),ws(Li),R,z),W)))}let So=Qd(a);function bo(){let g=q.ov;g.innerHTML="",g.hidden=!1;let R=F("div",{class:"shop"}),B=$p(T,G());So.filter(z=>!z.id.startsWith("portal_")||B&&z.id===B.block).forEach(z=>R.append(F("div",{class:"offer"+(z.locked?" locked":"")},F("img",{src:Z[z.id],alt:""}),F("div",{class:"of-t"},F("b",{},`${z.name_zh}${z.qty>1?" \xD7"+z.qty:""}`),F("small",{},z.locked?`\uFF08${z.locked}\uFF09`:`${z.price} \u91D1\u5E63${z.desc?"\u3000"+z.desc:""}`)),cr(p,z.id)?F("span",{class:"owned"},"\u5DF2\u64C1\u6709"):F("button",{class:"btn small",disabled:z.locked?!0:null,onclick:()=>ec(z)},z.locked?"\u672A\u958B\u653E":"\u8CFC\u8CB7")))),g.append(F("div",{class:"panel"},F("div",{class:"p-head"},F("h2",{},"\u5546\u5E97\u3000",F("span",{class:"coin"}),` ${p.coins}`),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Qt},"\xD7")),F("p",{class:"muted"},"\u91D1\u5E63\u600E\u9EBC\u4F86\uFF1F\u53BB\u300C\u7DF4\u7FD2\u77F3\u7891\u300D\u7B54\u82F1\u6587\u984C\uFF1A\u7B54\u5C0D 1 \u679A\u3001\u6253\u5B57\u984C 2 \u679A\u3002"),R))}function ec(g){let R=tp(p,v,g,u);R.ok?(lt(g.blueprint?`\u62FF\u5230 ${g.name_zh}\uFF01\u53BB\u5DE5\u4F5C\u53F0\u505A\u505A\u770B`:`\u8CB7\u5230 ${g.name_zh} \xD7${g.qty}`),d.dirtyMeta=!0,ut(),me(),In()):lt({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",locked:"\u9084\u6C92\u958B\u653E",owned:"\u5DF2\u7D93\u6709\u4E86"}[R.reason]||"\u8CB7\u4E0D\u4E86"),bo()}let As=null;function Ts(){let g=q.ov,R=b[As]||(b[As]=Su());g.innerHTML="",g.hidden=!1;let B=R.jobs[0],z=F("div",{class:"shop"});M.forEach(et=>{let pt=ei(v,et.in);z.append(F("div",{class:"offer"+(pt?"":" locked")},F("img",{src:Z[et.in],alt:""}),F("div",{class:"of-t"},F("b",{},`${a.name(et.in)} \u2192 ${a.name(et.out)}`),F("small",{},`\u6709 ${pt} \u500B \xB7 \u6BCF\u500B ${et.time} \u79D2`)),F("button",{class:"btn small",onclick:()=>{let mt=bu(R,v,et,w);mt.ok||lt(mt.reason==="fuel"?"\u8981\u653E\u7164\u70AD\u7576\u71C3\u6599":"\u6C92\u6709\u6750\u6599"),d.dirtyMeta=!0,me(),Ts()}},"\u653E\u9032\u53BB")))});let W=Object.values(R.done).reduce((et,pt)=>et+pt,0);g.append(F("div",{class:"panel"},F("div",{class:"p-head"},F("h2",{},"\u7194\u7210"),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Qt},"\xD7")),F("p",{class:"muted"},`\u71C3\u6599\u9084\u80FD\u71D2 ${Math.max(0,R.fuel-R.jobs.length)} \u500B\uFF08\u80CC\u5305\u7164\u70AD ${ei(v,"coal")}\uFF1B1 \u500B\u7164\u70AD\u71D2 ${w} \u500B\uFF09`),F("div",{class:"furnace-st"},B?`\u6B63\u5728\u71D2\uFF1A${a.name(B.in)}\uFF08\u9084\u8981 ${Math.ceil(B.left)} \u79D2\uFF0C\u6392\u968A ${R.jobs.length} \u500B\uFF09`:"\u7210\u5B50\u7A7A\u8457"),F("div",{class:"row"},F("button",{class:"btn",disabled:W?null:!0,onclick:()=>{let et=Eu(R,v,u);et&&lt(`\u62FF\u51FA ${et} \u500B`),d.dirtyMeta=!0,me(),Ts()}},`\u62FF\u51FA\u4F86\uFF08${W}\uFF09`)),z))}let pr=null,S=(g,R)=>{try{return JSON.parse(localStorage.getItem(g)||"null")||R}catch{return R}},G=()=>Yp(S("hw_portal_rewards",[]),S("hi_save",null),T),rt='<svg viewBox="0 0 64 64" width="72" height="72" aria-hidden="true"><path d="M20 30v-8a12 12 0 0 1 24 0v8h-6v-8a6 6 0 0 0-12 0v8z" fill="#26302A"/><polygon points="12,30 52,28 54,58 10,60" fill="#E0352B"/><polygon points="12,30 52,28 50,34 14,35" fill="rgba(0,0,0,.15)"/><circle cx="32" cy="44" r="4" fill="#EFEBDD"/><rect x="30" y="44" width="4" height="9" fill="#EFEBDD"/></svg>';function tt(){let g=T.find(W=>W.map===pr),R=q.ov;if(R.innerHTML="",R.hidden=!1,!g){Qt();return}let B=Object.keys(g.reward.items).map(W=>`${a.name(W)} \xD7${g.reward.items[W]}`).join("\u3001"),z=Uu(g.map,T,G());if(!z.ok){R.append(F("div",{class:"panel start"},F("div",{class:"p-head"},F("h2",{},"\u50B3\u9001\u9580\u30FB"+g.name_zh),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Qt},"\xD7")),F("div",{class:"padlock",html:rt}),F("p",{class:"big"},`\u5148\u6253\u5012 ${z.need.boss_zh} \u624D\u80FD\u9032\u5165`),F("p",{class:"muted"},`\u5F9E\u300C${z.need.name_zh}\u300D\u50B3\u9001\u9580\u9032\u53BB\uFF0C\u6253\u5012 ${z.need.boss_zh}\uFF0C\u9019\u500B\u50B3\u9001\u9580\u5C31\u6703\u6253\u958B\u3002`),F("div",{class:"row"},F("button",{class:"btn ghost",onclick:Qt},"\u77E5\u9053\u4E86"))));return}R.append(F("div",{class:"panel start"},F("div",{class:"p-head"},F("h2",{},"\u50B3\u9001\u9580\u30FB"+g.name_zh),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Qt},"\xD7")),F("p",{},`\u7A7F\u904E\u50B3\u9001\u9580\u5230\u52C7\u8005\u5CF6\u7684\u300C${g.name_zh}\u300D\u5192\u96AA\u3002\u6253\u5012\u90A3\u88E1\u7684 Boss\uFF0C\u56DE\u4F86\u53EF\u4EE5\u9818\uFF1A${g.reward.coins} \u91D1\u5E63\u3001${B}\u3002`),F("p",{class:"muted"},"\u4F60\u5728\u65B9\u584A\u4E16\u754C\u7684\u6771\u897F\u90FD\u6703\u81EA\u52D5\u5B58\u597D\u3002"),F("div",{class:"row"},F("button",{class:"btn big",onclick:async()=>{await In(),d.leaving=Wp(g.map),location.href=d.leaving}},"\u9032\u5165"),F("button",{class:"btn ghost",onclick:Qt},"\u5148\u4E0D\u8981"))))}function Q(){if(!t.portals)return 0;let g;try{g=JSON.parse(localStorage.getItem("hw_portal_rewards")||"[]")}catch{g=[]}let R=Xp(g,L);for(let B of R){let z=qp(B,T,v,p,u);if(L.push(B.id),!!z.ok){for(let W in z.leftovers)for(let et=0;et<z.leftovers[W];et++)I(W,d.p.x,d.p.y+1,d.p.z);lt(`\u5F9E${z.name_zh}\u5E36\u56DE\u4F86\uFF1A${z.coins} \u91D1\u5E63\u3001${Object.keys(z.items).map(W=>a.name(W)+" \xD7"+z.items[W]).join("\u3001")}`)}}return R.length&&(ut(),me(),d.dirtyMeta=!0,In()),R.length}let Ct=null;function Bt(g){Ct=g,g.busy=!0,Ut("trade")}function It(){let g=Ct,R=q.ov;if(!g)return Qt();R.innerHTML="",R.hidden=!1;let B=g.role,z=bp(),W=F("div",{class:"shop"});B.prof.offers.forEach(pt=>{let mt=pt.blueprint||pt.give,dt=!!pt.blueprint,wt=dt&&a.blueprints.find(le=>le.id===pt.blueprint),$t=dt&&cr(p,pt.blueprint);W.append(F("div",{class:"offer"},F("img",{src:Z[mt],alt:""}),F("div",{class:"of-t"},F("b",{},dt?wt.name_zh:`${a.name(mt)}${pt.count>1?" \xD7"+pt.count:""}`),F("small",{},`${pt.price} \u91D1\u5E63${dt?"\u3000"+(wt.desc||""):""}`)),$t?F("span",{class:"owned"},"\u5DF2\u64C1\u6709"):F("button",{class:"btn small",onclick:()=>{let le=Mp(p,v,pt,u);le.ok?(Rn("trade"),lt(dt?`\u62FF\u5230 ${wt.name_zh}\uFF01`:`\u8CB7\u5230 ${a.name(mt)} \xD7${pt.count}`),d.dirtyMeta=!0,ut(),me(),In()):lt({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u6216\u63A5\u82F1\u6587\u59D4\u8A17\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",owned:"\u5DF2\u7D93\u6709\u4E86"}[le.reason]||"\u8CB7\u4E0D\u4E86"),It()}},"\u8CFC\u8CB7")))});let et=F("div",{class:"quests"});B.quests.forEach(pt=>{let mt=tu(A,pt,z),dt=Object.keys(pt.reward.items||{}).map(wt=>`${a.name(wt)} \xD7${pt.reward.items[wt]}`).join("\u3001");et.append(F("div",{class:"offer quest"+(mt?" locked":"")},F("div",{class:"of-t"},F("b",{},"\u82F1\u6587\u59D4\u8A17\uFF1A"+pt.title_zh),F("small",{},`${pt.desc}\uFF0C\u7B54\u5C0D ${pt.need} \u984C \u2192 ${pt.reward.coins} \u91D1\u5E63\u3001${dt}`)),mt?F("span",{class:"owned"},"\u4ECA\u5929\u5B8C\u6210\u4E86"):F("button",{class:"btn small",onclick:()=>{d.overlay="quest",yp(q.ov,{quest:pt,onDone:wt=>{if(d.overlay="trade",wt>=0){let $t=Sp(A,pt,wt,z,p,v,u);if($t.ok){for(let le in $t.leftovers)for(let Me=0;Me<$t.leftovers[le];Me++)I(le,d.p.x,d.p.y+1,d.p.z);lt(`\u59D4\u8A17\u5B8C\u6210\uFF01 +${$t.coins} \u91D1\u5E63\u3001${dt}`),ut(),me(),d.dirtyMeta=!0,In(),d.stats.quests=(d.stats.quests||0)+1}else lt(`\u7B54\u5C0D ${wt} \u984C\uFF0C\u8981 ${pt.need} \u984C\u624D\u7B97\u5B8C\u6210\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01`)}It()}})}},"\u63A5\u59D4\u8A17")))}),R.append(F("div",{class:"panel"},F("div",{class:"p-head"},F("h2",{},`\u6751\u6C11\u30FB${B.prof.name_zh}\u3000`,F("span",{class:"coin"}),` ${p.coins}`),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Qt},"\xD7")),F("h3",{},"\u4EA4\u6613"),W,F("h3",{},"\u82F1\u6587\u59D4\u8A17"),F("p",{class:"muted"},"\u6BCF\u500B\u59D4\u8A17\u6BCF\u5929\u53EF\u4EE5\u9818\u4E00\u6B21\u734E\u3002"),et))}function kt(){let g=q.ov;g.innerHTML="",g.hidden=!1;let R=F("b",{},O.rd),B=F("input",{type:"range",min:2,max:6,step:1,value:O.rd,oninput:z=>{R.textContent=z.target.value},onchange:z=>{let W=+z.target.value;O.setRenderDistance(W),P.far=W*16+40,P.updateProjectionMatrix(),Ou("hw_rd",W)}});g.append(F("div",{class:"panel"},F("div",{class:"p-head"},F("h2",{},"\u8A2D\u5B9A"),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Qt},"\xD7")),F("label",{class:"set"},"\u8996\u91CE\u8DDD\u96E2\uFF08\u5340\u584A\uFF09",R,B),F("label",{class:"set"},"\u97F3\u6A02",F("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().music:.35,oninput:z=>Yl({music:+z.target.value,muted:!1})})),F("label",{class:"set"},"\u97F3\u6548",F("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().sfx:.7,oninput:z=>{Yl({sfx:+z.target.value,muted:!1}),Rn("place","wood")}})),t.creative?F("label",{class:"set"},"\u5929\u6C23\uFF08\u4E0B\u96E8\u3001\u4E0B\u96EA\uFF09",F("input",{type:"checkbox",checked:Ql("hw_weather","on")!=="off"?!0:null,onchange:z=>Ou("hw_weather",z.target.checked?"on":"off")})):null,F("p",{class:"muted"},"iPad \u5EFA\u8B70 3\uFF1B\u5361\u5361\u7684\u5C31\u8ABF\u5C0F\u3002"),F("div",{class:"row"},F("button",{class:"btn ghost",onclick:ue},"\u91CD\u7F6E\u4E16\u754C"),t.creative?F("button",{class:"btn",onclick:()=>Gt("survival")},"\u56DE\u5230\u751F\u5B58\u6A21\u5F0F"):F("button",{class:"btn",onclick:ce},"\u5275\u9020\u6A21\u5F0F\uFF08\u5BB6\u9577\u5BC6\u78BC\uFF09")),F("div",{id:"pinbox"}),F("p",{class:"muted"},"\u91CD\u7F6E\u4E16\u754C\u6703\u6E05\u6389\u84CB\u597D\u7684\u65B9\u584A\u3001\u80CC\u5305\u548C\u4F4D\u7F6E\uFF1B\u91D1\u5E63\uFF08\u7B54\u984C\u8CFA\u7684\uFF09\u6703\u4FDD\u7559\u3002"),F("p",{},F("a",{class:"home-link",href:"../../#s/game",onclick:()=>{In()}},"\u2190 \u56DE\u5C0F\u670B\u53CB\u5B78\u7FD2\u7AD9")),F("p",{class:"muted small"},"\u7248\u672C "+jl)))}async function Gt(g){await In(),Ou("hw_mode",g),d.resetting=!0,location.reload()}function ce(){let g=document.getElementById("pinbox"),R=window.KSParentPin;if(g.innerHTML="",!R||!R.isSet()){g.append(F("div",{class:"pin-ask"},F("p",{},"\u5275\u9020\u6A21\u5F0F\u8981\u5BB6\u9577\u540C\u610F\u3002\u8ACB\u7238\u7238\u5ABD\u5ABD\u5148\u5230\u5B78\u7FD2\u7AD9\u7684\u300C\u5BB6\u9577\u300D\u9801\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC\u3002"),F("a",{class:"btn ghost",href:"../../#parent"},"\u524D\u5F80\u5BB6\u9577\u9801")));return}let B=F("input",{class:"typein",type:"password",inputmode:"numeric",pattern:"[0-9]*",maxlength:"6",autocomplete:"off",placeholder:"\u5BB6\u9577\u5BC6\u78BC","aria-label":"\u5BB6\u9577\u5BC6\u78BC"}),z=()=>{let W=Ep(R,B.value.trim());W.ok?Gt("creative"):(lt(W.reason==="wrong"?"\u5BC6\u78BC\u4E0D\u5C0D":"\u9084\u6C92\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC"),B.value="")};B.addEventListener("keydown",W=>{W.stopPropagation(),W.key==="Enter"&&z()}),g.append(F("div",{class:"pin-ask"},F("p",{},"\u8ACB\u7238\u7238\u5ABD\u5ABD\u8F38\u5165\u5BB6\u9577\u5BC6\u78BC\uFF1A\u5275\u9020\u6A21\u5F0F\u662F\u53E6\u4E00\u500B\u4E16\u754C\uFF0C\u65B9\u584A\u7121\u9650\u3001\u4E0D\u80FD\u8CFA\u91D1\u5E63\u3002"),F("div",{class:"typerow"},B,F("button",{class:"btn",onclick:z},"\u78BA\u5B9A")))),setTimeout(()=>B.focus(),50)}async function ue(){if(confirm("\u78BA\u5B9A\u8981\u91CD\u7F6E\u4E16\u754C\u55CE\uFF1F\u84CB\u597D\u7684\u6771\u897F\u6703\u5168\u90E8\u6D88\u5931\uFF08\u91D1\u5E63\u4FDD\u7559\uFF09\u3002")){d.resetting=!0;try{await gp(["hw_coins"])}catch(g){console.warn(g)}location.reload()}}function Ut(g){document.pointerLockElement&&document.exitPointerLock(),d.overlay=g,sn(),g==="inv"?(dr=-1,Gn=null,Li()):g==="shop"?bo():g==="set"?kt():g==="furnace"?Ts():g==="portal"?tt():g==="trade"?It():g==="chest"?(Gn=null,gi()):g==="quiz"&&xp(q.ov,{onReward:R=>{vs(p,R),ut(),d.dirtyMeta=!0,In()},onClose:()=>{d.overlay=null}})}function Qt(){q.ov.hidden=!0,q.ov.innerHTML="",d.overlay=null,Ct&&(Ct.busy=!1,Ct=null)}let Ve=()=>{q.btnSnd.textContent=go()?"\u{1F507}":"\u{1F50A}"};q.btnSnd.onclick=()=>{Xl(),fu(),Ve()},["pointerdown","keydown"].forEach(g=>addEventListener(g,()=>Xl(),{capture:!0,once:!0})),Ve(),q.btnInv.onclick=()=>d.overlay==="inv"?Qt():Ut("inv"),q.btnShop.onclick=()=>d.overlay==="shop"?Qt():Ut("shop"),q.btnSet.onclick=()=>d.overlay==="set"?Qt():Ut("set"),q.btnView.onclick=()=>De(),q.bRide.onclick=()=>wo();function De(){d.view=d.view==="fp"?"tp":"fp",lt(d.view==="fp"?"\u7B2C\u4E00\u4EBA\u7A31":"\u7B2C\u4E09\u4EBA\u7A31")}function Re(){d.ride||(d.fly=!d.fly,d.v.y=0,q.root.classList.toggle("flying",d.fly),lt(d.fly?"\u98DB\u884C\uFF1A\u958B\uFF08\u8DF3\uFF1D\u4E0A\u5347\u3001\u4E0B\uFF1D\u4E0B\u964D\uFF09":"\u98DB\u884C\uFF1A\u95DC"))}let Oe=new J;function Ot(){let g=Math.cos(d.pitch);return{x:-Math.sin(d.yaw)*g,y:Math.sin(d.pitch),z:-Math.cos(d.yaw)*g}}let Je=()=>({x:d.p.x,y:d.p.y+1.62+d.eyeOff+(d.ride?jp[d.ride.kind]:0),z:d.p.z}),ge=g=>g&&!a.flat.liquid[g],un=g=>a.flat.boxes[g]||(a.flat.shape[g]===4?yv:null);function Ze(g,R,B){if(g==="screen"){Oe.set(R/innerWidth*2-1,-(B/innerHeight)*2+1,.5).unproject(P).sub(P.position).normalize();let pt=P.position,mt=d.view==="tp"?pt.distanceTo(new J(d.p.x,d.p.y+1.62,d.p.z)):0,dt={x:pt.x,y:pt.y,z:pt.z},wt={x:Oe.x,y:Oe.y,z:Oe.z};d.lastRay={o:dt,d:wt};let $t=oo(dt,wt,Fu+1+mt,V,ge,un);return $t&&($t.at={x:dt.x+wt.x*$t.dist,y:dt.y+wt.y*$t.dist,z:dt.z+wt.z*$t.dist}),$t}let z=Je(),W=Ot();d.lastRay={o:z,d:W};let et=oo(z,W,Fu,V,ge,un);return et&&(et.at={x:z.x+W.x*et.dist,y:z.y+W.y*et.dist,z:z.z+W.z*et.dist}),et}function sn(){d.mining.active=!1,d.mining.k="",d.mining.t=0,vt.visible=!1}function Di(g,R,B){Rn("door");let z=a.get(O.get(g,R,B)),W=a.get(z.openAs||z.closeAs);if(!W)return;let et=mt=>{let dt=a.get(mt);return dt&&dt.interact==="door"},pt=R;for(;et(O.get(g,pt-1,B));)pt--;for(let mt=pt;et(O.get(g,mt,B));mt++)O.set(g,mt,B,W.n);d.dirtyMeta=!0}let Ae=()=>{let g=v.slots[d.sel];return g?a.toolOf(g.id):null};function Ge(g){let R=g.n,B=t.creative?{time:t.breakTime,harvest:!1,usesTool:!1,creative:!0}:$l(a.get(R),Ae());if(!O.set(g.x,g.y,g.z,0))return;let z=g.x+","+g.y+","+g.z,W=a.get(R);if(E[z]){if(t.drops){for(let dt of E[z].slots)if(dt)for(let wt=0;wt<dt.count;wt++)I(dt.id,g.x+.5,g.y+.4,g.z+.5)}delete E[z]}if(W&&W.crop){if(delete D[z],t.drops)for(let dt of su(W.stage|0))for(let wt=0;wt<dt.n;wt++)I(dt.id,g.x+.5,g.y+.3,g.z+.5);d.stats.harvested=(d.stats.harvested||0)+(W.stage===3?1:0),d.dirtyMeta=!0;return}let et=B.harvest?a.dropOf(R):null;et?I(et,g.x+.5,g.y+.4,g.z+.5):!B.harvest&&!B.creative&&lt(`${a.name(R)}\u8981\u7528\u66F4\u597D\u7684\u5DE5\u5177\u6316\uFF0C\u624D\u6703\u6389\u6771\u897F`);let pt=O.get(g.x,g.y+1,g.z);if(a.flat.plant[pt]){delete D[g.x+","+(g.y+1)+","+g.z],O.set(g.x,g.y+1,g.z,0);let dt=t.drops&&a.dropOf(pt);dt&&I(dt,g.x+.5,g.y+1.3,g.z+.5)}if(a.get(R).interact==="door")for(let dt of[-1,1]){let wt=O.get(g.x,g.y+dt,g.z);a.get(wt)&&a.get(wt).interact==="door"&&O.set(g.x,g.y+dt,g.z,0)}let mt=g.x+","+g.y+","+g.z;if(d.bed&&d.bed.x===g.x&&d.bed.y===g.y&&d.bed.z===g.z&&(d.bed=null,lt("\u5E8A\u62C6\u6389\u4E86\uFF0C\u91CD\u751F\u9EDE\u6539\u56DE\u51FA\u751F\u9EDE")),b[mt]){let dt=Au(b[mt]);for(let wt in dt)for(let $t=0;$t<dt[wt];$t++)I(wt,g.x+.5,g.y+.4,g.z+.5);delete b[mt]}if(B.usesTool){let dt=Zl(v,d.sel,a);dt.broke&&lt(`\u4F60\u7684${a.name(dt.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),me()}d.dirtyMeta=!0,d.stats.mined++,Rn("break",ur(W))}function bn(g){let R=v.slots[d.sel],B=R&&a.get(R.id);if(B&&B.food)return t.damage?(lu(x,B.food,20)?(Rn("eat"),Ai(v,d.sel,1),zt(),me(),d.dirtyMeta=!0,lt(`\u5403\u4E86${B.name_zh}\uFF0C\u597D\u98FD\uFF01`),d.stats.ate=(d.stats.ate||0)+1):lt("\u73FE\u5728\u4E0D\u9913"),!0):(lt("\u5275\u9020\u6A21\u5F0F\u4E0D\u6703\u9913"),!0);if(B&&B.place==="boat"){if(d.ride)return lt("\u5148\u4E0B\u4F86\u518D\u653E"),!0;let re=d.lastRay,de=re&&oo(re.o,re.d,Fu+1,V,Pe=>a.flat.liquid[Pe]||a.flat.solid[Pe]);return!de||!a.flat.liquid[de.n]||O.get(de.x,de.y+1,de.z)?(lt("\u8239\u8981\u653E\u5728\u6C34\u9762\u4E0A"),!1):(d.p={x:de.x+.5,y:de.y+1-.15,z:de.z+.5},nc("boat",{y:de.y+1}),!0)}if(B&&B.place==="minecart"){if(d.ride)return lt("\u5148\u4E0B\u4F86\u518D\u653E"),!0;let re=g&&a.get(g.n);if(!re||!re.rail)return lt("\u7926\u8ECA\u8981\u653E\u5728\u9435\u8ECC\u4E0A"),!1;let de=Bh(re.rail,g.x,g.y,g.z,-Math.sin(d.yaw),-Math.cos(d.yaw),Pe=>!!At(g.x+Tn[Pe][0],g.y,g.z+Tn[Pe][1]));return nc("minecart",{st:de}),!0}if(!g)return!1;let z=a.get(g.n);if(z&&z.interact==="chest")return Rn("chest"),is=g.x+","+g.y+","+g.z,Ut("chest"),!0;let W=B&&a.toolOf(R.id);if(W&&W.type==="hoe"&&iu(z.id,!O.get(g.x,g.y+1,g.z)||a.flat.plant[O.get(g.x,g.y+1,g.z)])){if(O.set(g.x,g.y+1,g.z,0),O.set(g.x,g.y,g.z,a.num("farmland")),t.consume){let re=Zl(v,d.sel,a);re.broke&&lt(`\u4F60\u7684${a.name(re.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`)}return me(),d.dirtyMeta=!0,!0}if(B&&B.place==="crop")return z.id!=="farmland"||g.face[1]!==1||O.get(g.x,g.y+1,g.z)?(lt("\u7A2E\u5B50\u8981\u7A2E\u5728\u8015\u5730\u4E0A\uFF08\u5148\u7528\u92E4\u982D\u92E4\u5730\uFF09"),!1):(O.set(g.x,g.y+1,g.z,a.num("wheat_0")),D[g.x+","+(g.y+1)+","+g.z]={t:Date.now(),wet:ru(V,re=>a.flat.liquid[re]===1,g.x,g.y,g.z)},t.consume&&Ai(v,d.sel,1),me(),d.dirtyMeta=!0,d.stats.planted=(d.stats.planted||0)+1,!0);let et=a.get(g.n);if(et&&et.interact==="quiz")return t.coins?(Ut("quiz"),!0):(lt("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u8CFA\u91D1\u5E63\uFF0C\u56DE\u751F\u5B58\u6A21\u5F0F\u518D\u4F86\u7B54\u984C\u5427"),!0);let pt=v.slots[d.sel]&&a.get(v.slots[d.sel].id).placeable;if(et&&et.interact==="door")return Di(g.x,g.y,g.z),!0;if(et&&et.interact==="portal"&&!pt&&!t.portals)return lt("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u9032\u50B3\u9001\u9580"),!0;if(et&&et.interact==="portal"&&!pt)return pr=et.portal,Ut("portal"),!0;if(et&&et.interact==="bed"&&!pt)return d.bed={x:g.x,y:g.y,z:g.z},d.dirtyMeta=!0,lt("\u91CD\u751F\u9EDE\u8A2D\u597D\u4E86\uFF1A\u6688\u5012\u6703\u56DE\u5230\u9019\u5F35\u5E8A"),!0;if(et&&et.interact==="craft"&&!pt)return Ut("inv"),!0;if(et&&et.interact==="furnace"&&!pt)return As=g.x+","+g.y+","+g.z,Ut("furnace"),!0;let mt=v.slots[d.sel];if(!mt)return lt("\u5FEB\u6377\u5217\u9019\u683C\u662F\u7A7A\u7684"),!1;let dt=a.get(mt.id);if(!dt||!dt.placeable)return lt(`${a.name(mt.id)} \u4E0D\u80FD\u653E`),!1;if(dt.place==="slab"&&dt.fullAs&&g.n===dt.n&&g.face[1]===1&&O.set(g.x,g.y,g.z,a.num(dt.fullAs)))return t.consume&&Ai(v,d.sel,1),me(),d.stats.placed++,d.dirtyMeta=!0,!0;let wt=a.flat.plant[g.n]&&!a.flat.plant[dt.n],$t=wt?g.x:g.x+g.face[0],le=wt?g.y:g.y+g.face[1],Me=wt?g.z:g.z+g.face[2];if(le<0||le>=64)return!1;let qe=O.get($t,le,Me);if(qe&&!a.flat.liquid[qe]&&!(wt&&a.flat.plant[qe]))return!1;let Ne=.6/2;if(dt.solid&&$t+1>d.p.x-Ne&&$t<d.p.x+Ne&&Me+1>d.p.z-Ne&&Me<d.p.z+Ne&&le+1>d.p.y&&le<d.p.y+1.8)return!1;if(a.flat.plant[dt.n]&&!a.flat.solid[O.get($t,le-1,Me)])return lt(`${dt.name_zh}\u8981\u7A2E\u5728\u5730\u4E0A`),!1;let ye=dt.n;if(dt.place==="slab"){let re=g.at?g.at.y-Math.floor(g.at.y):0;(g.face[1]===-1||g.face[1]===0&&re>.5)&&a.get(dt.id+"_top")&&(ye=a.num(dt.id+"_top"))}else if(dt.place==="stairs"){let re=-Math.sin(d.yaw),de=-Math.cos(d.yaw),Pe=Math.abs(re)>Math.abs(de)?re>0?1:3:de>0?2:0,Qe=a.get(dt.id+["","_e","_s","_w"][Pe]);Qe&&(ye=Qe.n)}let pe=null;if(dt.place==="rail"){if(!a.flat.solid[O.get($t,le-1,Me)])return lt("\u9435\u8ECC\u8981\u653E\u5728\u5730\u4E0A"),!1;let re=-Math.sin(d.yaw),de=-Math.cos(d.yaw),Pe=Oh((Qe,ln)=>At(Qe,le,ln),$t,Me,!!dt.powered,Math.abs(re)>Math.abs(de)?"e":"n");ye=a.num(Fl(!!dt.powered,Pe.shape)),pe=Pe.updates}if(!O.set($t,le,Me,ye))return!1;if(pe)for(let[re,de,Pe]of pe){let Qe=At(re,le,de);Qe&&O.set(re,le,de,a.num(Fl(Qe.powered,Pe)))}return Rn("place",ur(dt)),dt.interact==="door"&&!O.get($t,le+1,Me)&&O.set($t,le+1,Me,dt.n),t.consume&&Ai(v,d.sel,1),d.dirtyMeta=!0,me(),d.stats.placed++,!0}let we={},Hn=g=>we[g]||(we[g]=(()=>{let R=new Bn({color:g});return R.userData.base=new ie(g),R})());function Ni(g){let R=new On,B=(z,W,et,pt,mt,dt,wt)=>{let $t=new We(new vn(z,W,et),Hn(pt));$t.position.set(mt,dt,wt),R.add($t)};if(g==="boat"){B(.9,.08,1.5,"#8C6640",0,.04,0);for(let z of[-1,1])B(.08,.3,1.5,"#A97E4E",z*.45,.19,0),B(.9,.3,.08,"#A97E4E",0,.19,z*.75);B(.9,.06,.25,"#C49A63",0,.25,.1)}else{B(.9,.08,1.1,"#5E6660",0,.12,0);for(let z of[-1,1])B(.08,.45,1.1,"#8C8A84",z*.45,.35,0),B(.9,.45,.08,"#8C8A84",0,.35,z*.55),B(.06,.18,.18,"#26302A",z*.47,.1,.35),B(.06,.18,.18,"#26302A",z*.47,.1,-.35)}return R}function mr(g){g.saddled=!0;let R=at.get(g.id);if(!R)return;let B=new We(new vn(.62,.1,.6),Hn("#5C3A24"));B.position.set(0,1.4,.05),R.add(B)}function nc(g,R){let B=g==="horse"?null:Ni(g);B&&X.add(B),d.ride=Object.assign({kind:g,obj:B,yaw:d.yaw},R),d.fly=!1,q.root.classList.remove("flying"),d.v={x:0,y:0,z:0},q.bRide.hidden=!1,sn(),lt({boat:"\u4E0A\u8239\u4E86\uFF01\u7528\u8D70\u8DEF\u7684\u65B9\u5F0F\u5212\u8239\uFF0C\u6309\u300C\u4E0B\u4F86\u300D\u4E0A\u5CB8",minecart:"\u5750\u4E0A\u7926\u8ECA\uFF01\u5F80\u524D\u63A8\u5C31\u51FA\u767C\uFF0C\u91D1\u8272\u9435\u8ECC\u6703\u52A0\u901F",horse:"\u9A0E\u4E0A\u99AC\u4E86\uFF01\u8DD1\u5F97\u66F4\u5FEB\u3001\u8DF3\u5F97\u66F4\u9AD8"}[g])}function wo(g){let R=d.ride;if(R){if(d.ride=null,q.bRide.hidden=!0,R.obj&&X.remove(R.obj),R.kind==="horse"&&(R.m.riding=!1),R.kind==="minecart")d.p.y+=.2;else for(let[B,z]of[[1,0],[-1,0],[0,1],[0,-1],[1.5,0],[-1.5,0],[0,1.5],[0,-1.5]]){let W={x:d.p.x+B,y:Math.floor(d.p.y+.5),z:d.p.z+z};if(Wd(W,y)&&a.flat.solid[O.get(W.x,W.y-1,W.z)]){d.p=W;break}}d.v={x:0,y:0,z:0},d.fallTop=d.p.y,g||lt("\u4E0B\u4F86\u4E86")}}function Qp(g){let R=v.slots[d.sel];if(!g.tame){R&&(R.id==="wheat"||R.id==="apple")?(t.consume&&Ai(v,d.sel,1),me(),g.fed=(g.fed||0)+1,g.fed>=3?(g.tame=!0,d.horseMob=g,d.dirtyMeta=!0,lt("\u99AC\u5152\u8DDF\u4F60\u8B8A\u6210\u597D\u670B\u53CB\u4E86\uFF01\u88DD\u4E0A\u99AC\u978D\u5C31\u80FD\u9A0E")):lt(`\u99AC\u5152\u5403\u5F97\u597D\u958B\u5FC3\uFF08${g.fed}/3\uFF09`)):lt("\u99AC\u5152\u6709\u9EDE\u5BB3\u7F9E\uFF0C\u9935\u7260 3 \u500B\u5C0F\u9EA5\u8A66\u8A66\u770B");return}if(!g.saddled){R&&R.id==="saddle"?(t.consume&&Ai(v,d.sel,1),me(),mr(g),d.horseMob=g,d.dirtyMeta=!0,lt("\u88DD\u597D\u99AC\u978D\u4E86\uFF01\u518D\u9EDE\u4E00\u4E0B\u99AC\u5152\u5C31\u80FD\u9A0E\u4E0A\u53BB")):lt("\u8981\u5148\u5E6B\u99AC\u5152\u88DD\u4E0A\u99AC\u978D\uFF08\u5546\u5E97\u6216\u6751\u838A\u7684\u5546\u4EBA\u6709\u8CE3\uFF09");return}d.ride||(g.riding=!0,d.p={x:g.p.x,y:g.p.y,z:g.p.z},nc("horse",{m:g}),d.stats.rodeHorse=(d.stats.rodeHorse||0)+1)}function tm(g,R,B,z,W,et,pt){let mt=d.ride;if(mt.kind==="boat"){let dt=(z*B+et*R)*7,wt=(W*B+pt*R)*7,$t=1-Math.exp(-2.5*g);d.v.x+=(dt-d.v.x)*$t,d.v.z+=(wt-d.v.z)*$t,d.v.y=0;let le=(Ne,ye)=>a.flat.liquid[O.get(Ne,mt.y-1,ye)]===1&&!a.flat.solid[O.get(Ne,mt.y,ye)],Me=d.p.x+d.v.x*g,qe=d.p.z+d.v.z*g;le(Me+Math.sign(d.v.x)*.6,d.p.z)?d.p.x=Me:d.v.x=0,le(d.p.x,qe+Math.sign(d.v.z)*.6)?d.p.z=qe:d.v.z=0,d.p.y=mt.y-.15,Math.hypot(d.v.x,d.v.z)>.3&&(mt.yaw=Math.atan2(-d.v.x,-d.v.z))}else{zh(mt.st,g,B,(wt,$t)=>At(wt,mt.st.y,$t));let dt=kh(mt.st);d.p.x=dt.x,d.p.z=dt.z,d.p.y=mt.st.y+.05,mt.yaw=dt.yaw,d.v.x=d.v.z=d.v.y=0}d.fallTop=d.p.y}addEventListener("keydown",g=>{if(g.target&&g.target.tagName==="INPUT")return;let R=g.key.toLowerCase();if(R==="e"){d.overlay==="inv"?Qt():!d.overlay&&Ut("inv"),g.preventDefault();return}if(d.overlay!=="dead"&&!(d.overlay==="ask"||d.overlay==="quest")){if(R==="escape"&&d.overlay){d.overlay==="quiz"?(q.ov.hidden=!0,q.ov.innerHTML="",d.overlay=null):Qt();return}if(!d.overlay){if(R==="shift"&&d.ride){wo();return}d.keys[R]=!0,g.code==="Space"&&(d.keys[" "]=!0,g.preventDefault()),R>="1"&&R<="9"&&(d.sel=+R-1,me()),R==="f"&&Re(),R==="v"&&De()}}}),addEventListener("keyup",g=>{d.keys[g.key.toLowerCase()]=!1,g.code==="Space"&&(d.keys[" "]=!1)}),addEventListener("blur",()=>{d.keys={},sn()}),C.addEventListener("mousedown",g=>{if(!(d.touch||d.overlay)){if(document.pointerLockElement!==C){C.requestPointerLock&&C.requestPointerLock();return}if(g.button===0){let R=Xt("center");if(R){se(R);return}d.mining.active=!0,d.mining.src="center"}g.button===2&&(bn(Ze("center")),d.placeRepeat=.3,d.rightHeld=!0)}}),addEventListener("mouseup",g=>{g.button===0&&sn(),g.button===2&&(d.rightHeld=!1)}),C.addEventListener("contextmenu",g=>g.preventDefault()),addEventListener("mousemove",g=>{document.pointerLockElement===C&&(d.yaw-=g.movementX*.0024,d.pitch=Math.max(-1.55,Math.min(1.55,d.pitch-g.movementY*.0024)))}),addEventListener("wheel",g=>{d.overlay||d.touch||(d.sel=(d.sel+(g.deltaY>0?1:8))%9,me())},{passive:!0}),document.addEventListener("pointerlockchange",()=>{q.root.classList.toggle("locked",document.pointerLockElement===C)});let gr=new Map;function em(g){d.touch!==g&&(d.touch=g,q.root.classList.toggle("touch",g),document.body.classList.toggle("is-touch",g))}q.root.classList.toggle("touch",d.touch),document.body.classList.toggle("is-touch",d.touch),C.addEventListener("pointerdown",g=>{if(g.pointerType!=="touch"||(em(!0),d.overlay))return;if(g.preventDefault(),g.clientX<innerWidth*.4&&g.clientY>innerHeight*.35&&!d.joy.active){d.joy={x:0,y:0,active:!0,id:g.pointerId,ox:g.clientX,oy:g.clientY},q.joy.style.transform=`translate(${g.clientX-60}px, ${g.clientY-60}px)`,q.joy.hidden=!1,q.knob.style.transform="translate(0px,0px)",gr.set(g.pointerId,{kind:"joy"});return}let R={kind:"look",x:g.clientX,y:g.clientY,sx:g.clientX,sy:g.clientY,t0:performance.now(),drag:!1,hold:!1};R.timer=setTimeout(()=>{R.drag||(R.hold=!0,d.mining.active=!0,d.mining.src="screen",d.mining.sx=R.x,d.mining.sy=R.y)},280),gr.set(g.pointerId,R)},{passive:!1}),addEventListener("pointermove",g=>{let R=gr.get(g.pointerId);if(!R)return;if(R.kind==="joy"){let W=g.clientX-d.joy.ox,et=g.clientY-d.joy.oy,pt=Math.hypot(W,et),mt=55;pt>mt&&(W*=mt/pt,et*=mt/pt),d.joy.x=W/mt,d.joy.y=et/mt,q.knob.style.transform=`translate(${W}px,${et}px)`;return}let B=g.clientX-R.x,z=g.clientY-R.y;R.x=g.clientX,R.y=g.clientY,!R.drag&&Math.hypot(R.x-R.sx,R.y-R.sy)>12&&(R.drag=!0,clearTimeout(R.timer),R.hold&&(sn(),R.hold=!1)),R.drag?(d.yaw-=B*.0055,d.pitch=Math.max(-1.55,Math.min(1.55,d.pitch-z*.0055))):R.hold&&(d.mining.sx=R.x,d.mining.sy=R.y)});let zu=g=>{let R=gr.get(g.pointerId);if(R){if(gr.delete(g.pointerId),R.kind==="joy"){d.joy={x:0,y:0,active:!1},q.joy.hidden=!0;return}if(clearTimeout(R.timer),R.hold)sn();else if(!R.drag&&performance.now()-R.t0<280&&!d.overlay){let B=Xt("screen",R.x,R.y);B?se(B):bn(Ze("screen",R.x,R.y))}}};addEventListener("pointerup",zu),addEventListener("pointercancel",zu);let ku=(g,R,B)=>{g.addEventListener("pointerdown",z=>{z.preventDefault(),z.stopPropagation(),R()}),g.addEventListener("pointerup",B),g.addEventListener("pointercancel",B),g.addEventListener("pointerleave",B)};ku(q.bJump,()=>{d.jumpHeld=!0},()=>{d.jumpHeld=!1}),ku(q.bDown,()=>{d.downHeld=!0},()=>{d.downHeld=!1}),q.bFly.addEventListener("pointerdown",g=>{g.preventDefault(),g.stopPropagation(),Re()}),q.bPlace.addEventListener("pointerdown",g=>{g.preventDefault(),g.stopPropagation(),bn(Ze("center"))}),document.addEventListener("touchmove",g=>{g.target.closest(".scroll, .panel")||g.preventDefault()},{passive:!1}),["gesturestart","gesturechange","dblclick"].forEach(g=>document.addEventListener(g,R=>R.preventDefault(),{passive:!1})),q.start.hidden=!1,q.go.onclick=()=>{q.start.hidden=!0,d.started=!0,d.paused=!1,q.root.classList.add("started"),!d.touch&&C.requestPointerLock&&C.requestPointerLock()};async function In(){if(d.resetting)return;let g={hw_meta:{v:1,seed:f,time:d.time,build:jl},hw_player:{x:d.p.x,y:d.p.y,z:d.p.z,yaw:d.yaw,pitch:d.pitch,fly:d.fly,sel:d.sel,hp:x.hp,bed:d.bed,armor:d.armor,armorDur:d.armorDur,horse:d.horseMob&&!d.horseMob.gone?{x:d.horseMob.p.x,y:d.horseMob.p.y,z:d.horseMob.p.z,saddled:!!d.horseMob.saddled}:d.horse},hw_inventory:uo(v),hw_coins:ep(p),hw_furnaces:b,hw_chests:Object.fromEntries(Object.entries(E).map(([R,B])=>[R,uo(B)])),hw_crops:D,hw_quests:A,hw_portal_claimed:L.slice(-200)};for(let R of d.dirty){let B=_.get(R);B&&(g["hw_chunk:"+R]=Yh(B))}d.dirty.clear(),d.dirtyMeta=!1;try{await Kh(g),d.lastSave=Date.now()}catch(R){console.warn("save failed",R)}}setInterval(()=>{d.started&&In()},8e3),document.addEventListener("visibilitychange",()=>{document.hidden&&d.started&&In()}),addEventListener("pagehide",()=>{d.started&&In()}),d.stats={mined:0,placed:0};function Vu(){let g=innerWidth,R=innerHeight;N.setSize(g,R,!1),P.aspect=g/R,P.updateProjectionMatrix()}addEventListener("resize",Vu),Vu(),ut(),me(),zt(),Es(),t.creative&&(Ci("#coinpill").hidden=!0,Ci("#modebadge").hidden=!1,q.btnShop.hidden=!0,q.hearts.hidden=!0),Q(),addEventListener("pageshow",g=>{g.persisted&&Q()});let Gu=performance.now(),Eo=0,ic=0,nm=new ie("#EFEBDD"),im=new ie("#22302F"),sm=new ie("#E6B48C");function Hu(g){requestAnimationFrame(Hu);let R=(g-Gu)/1e3;Gu=g;let B=Math.min(.05,R);d.frames.push(R*1e3),d.frames.length>4e3&&d.frames.shift(),O.update(d.p.x,d.p.z);let z=O.ready(d.p.x,d.p.z);d.auto&&lm(B),d.started&&!d.overlay&&z&&om(B),d.started&&!d.dead&&Pu(x,B)&&(zt(),d.dirtyMeta=!0),d.time=(d.time+B/_v)%1;let W=d.time*Math.PI*2,et=Math.sin(W),pt=Math.min(1,Math.max(0,(et+.12)/.42));U.copy(im).lerp(nm,pt);let mt=Math.max(0,1-Math.abs(et)/.3)*(pt>.05?1:.4);if(U.lerp(sm,mt*.55),!(t.creative&&Ql("hw_weather","on")==="off")?yu(d.weather,B):d.weather.level=0,d.ambT=(d.ambT||0)+B,d.ambT>1){d.ambT=0;let ye=Math.floor(d.p.x),pe=Math.floor(d.p.z),re=!1;for(let Pe=2;Pe<14&&!re;Pe++)a.flat.opaque[O.get(ye,Math.floor(d.p.y)+Pe,pe)]&&(re=!0);d.underground=re&&d.p.y<m.height(ye,pe)-4,d.biome=m.biomeOf(ye,pe);let de=gu({day:pt,underground:d.underground});de!==d.musicScene&&(d.musicScene=de,du(xu[de]))}let wt=d.underground?null:vu(d.biome,d.weather),$t=wt?d.weather.level:0;$t&&U.lerp(d.rainSky||(d.rainSky=new ie("#8E9590")),.45*$t),Wt(B,P.position,wt),pu(wt==="rain"?$t:0),es(d.overlay==="quiz"||d.overlay==="ask"||d.overlay==="quest"),K.uniforms.uDay.value=pt*(1-.3*$t),K.uniforms.uFog.value.set(...rm(U));let le=Je();d.eyeOff*=Math.pow(5e-4,B);let Me=Ot();if(d.view==="tp"){let ye=oo(le,{x:-Me.x,y:-Me.y,z:-Me.z},4,V,re=>a.flat.opaque[re]===1),pe=ye?Math.max(.4,ye.dist-.25):4;P.position.set(le.x-Me.x*pe,le.y-Me.y*pe,le.z-Me.z*pe)}else P.position.set(le.x,le.y,le.z);P.rotation.set(d.pitch,d.yaw,0);let qe=P.far*.8;if(_t.position.set(P.position.x+Math.cos(W)*qe,P.position.y+Math.sin(W)*qe,P.position.z+.25*qe),_t.scale.setScalar(qe*.14),$.position.set(P.position.x-Math.cos(W)*qe,P.position.y-Math.sin(W)*qe,P.position.z-.25*qe),$.scale.setScalar(qe*.1),ee.visible=d.view==="tp",ee.visible){ee.position.set(d.p.x,d.p.y+(d.ride?jp[d.ride.kind]:0),d.p.z),ee.rotation.y=d.yaw;let ye=Math.hypot(d.v.x,d.v.z),pe=Math.sin(g/120)*Math.min(1,ye/4)*.7;Xe.rotation.x=pe,Ee.rotation.x=-pe,Le.rotation.x=-pe,H.rotation.x=pe;let re=.35+.65*pt;ee.children.forEach(de=>de.material.color.copy(de.userData.base).multiplyScalar(re))}for(let ye in Fe)Fe[ye].color.setScalar(.4+.6*pt);for(let ye in we)we[ye].color.copy(we[ye].userData.base).multiplyScalar(.35+.65*pt);d.ride&&d.ride.obj&&(d.ride.obj.position.set(d.p.x,d.p.y,d.p.z),d.ride.obj.rotation.y=d.ride.yaw);let Ne=d.started&&!d.overlay?d.mining.active&&d.mining.src==="screen"?Ze("screen",d.mining.sx,d.mining.sy):Ze("center"):null;if(Ne){Mt.visible=!0;let ye=un(Ne.n);if(ye){let pe=1,re=1,de=1,Pe=0,Qe=0,ln=0;for(let xi of ye)pe=Math.min(pe,xi[0]),re=Math.min(re,xi[1]),de=Math.min(de,xi[2]),Pe=Math.max(Pe,xi[3]),Qe=Math.max(Qe,xi[4]),ln=Math.max(ln,xi[5]);Mt.scale.set(Pe-pe,Qe-re,ln-de),Mt.position.set(Ne.x+(pe+Pe)/2,Ne.y+(re+Qe)/2,Ne.z+(de+ln)/2)}else Mt.scale.set(1,1,1),Mt.position.set(Ne.x+.5,Ne.y+.5,Ne.z+.5)}else Mt.visible=!1;if(d.mining.active&&Ne){let ye=Ne.x+","+Ne.y+","+Ne.z;ye!==d.mining.k&&(d.mining.k=ye,d.mining.t=0),d.mining.t+=B;let pe=t.creative?a.get(Ne.n).hardness<0?1/0:t.breakTime:$l(a.get(Ne.n),Ae()).time;if(pe===1/0)vt.visible=!1,d.mining.warned||(lt(a.name(Ne.n)+"\u6316\u4E0D\u52D5"),d.mining.warned=!0);else{d.mining.tick=(d.mining.tick||0)+B,d.mining.tick>.25&&(d.mining.tick=0,Rn("hit",ur(a.get(Ne.n))));let re=d.mining.t/pe;vt.visible=!0,vt.position.copy(Mt.position),vt.scale.copy(Mt.scale),vt.material.map=gt[Math.min(3,Math.floor(re*4))],re>=1&&(Ge(Ne),d.mining.k="",d.mining.t=0,vt.visible=!1)}}else vt.visible=!1,d.mining.active||(d.mining.warned=!1);if(d.rightHeld&&!d.overlay&&(d.placeRepeat-=B,d.placeRepeat<=0&&(bn(Ze("center")),d.placeRepeat=.25)),am(B),d.cropT=(d.cropT||0)+B,d.cropT>2){d.cropT=0;let ye=Date.now();for(let pe in D){let[re,de,Pe]=pe.split(",").map(Number);if(!O.ready(re,Pe))continue;let Qe=a.get(O.get(re,de,Pe));if(!Qe||!Qe.crop){delete D[pe];continue}let ln=nu(D[pe].t,ye,D[pe].wet);ln>(Qe.stage|0)&&(O.set(re,de,Pe,a.num("wheat_"+ln)),d.dirtyMeta=!0)}}Rt(d.overlay?0:B,pt,g);for(let ye in b){let pe=b[ye];pe.jobs.length&&(wu(pe,B),d.dirtyMeta=!0,d.overlay==="furnace"&&ye===As&&(d.furnUi=(d.furnUi||0)+B)>.5&&(d.furnUi=0,Ts()))}N.render(X,P),Eo+=R,ic++,Eo>.5&&(q.dbg&&(q.dbg.textContent=`${Math.round(ic/Eo)} fps \xB7 \u5340\u584A ${O.stats.loaded} \xB7 ${Gd[m.biomeOf(Math.floor(d.p.x),Math.floor(d.p.z))]} \xB7 ${d.p.x.toFixed(1)}, ${d.p.y.toFixed(1)}, ${d.p.z.toFixed(1)}`),Eo=0,ic=0),!z&&d.started?q.loading.hidden=!1:q.loading.hidden=!0}function rm(g){let R=g.getHexString();return[parseInt(R.slice(0,2),16)/255,parseInt(R.slice(2,4),16)/255,parseInt(R.slice(4,6),16)/255]}function om(g){let R=d.keys,B=(R.d?1:0)-(R.a?1:0),z=(R.w?1:0)-(R.s?1:0);d.joy.active&&(B=d.joy.x,z=-d.joy.y);let W=Math.min(1,Math.hypot(B,z));if(W>0){let ln=Math.hypot(B,z);B=B/ln*W,z=z/ln*W}let et=-Math.sin(d.yaw),pt=-Math.cos(d.yaw),mt=Math.cos(d.yaw),dt=-Math.sin(d.yaw);if(d.ride&&d.ride.kind!=="horse"){tm(g,B,z,et,pt,mt,dt);return}let wt=R.control||!d.fly&&R.shift||d.joy.active&&W>.92,$t=V(d.p.x,d.p.y+.1,d.p.z),le=V(d.p.x,d.p.y+1,d.p.z),Me=a.flat.liquid[$t]===1||a.flat.liquid[le]===1,qe=d.fly?10:d.ride?8.5:Me?2.6:wt?6.2:4.3,Ne=(et*z+mt*B)*qe,ye=(pt*z+dt*B)*qe,pe=R[" "]||d.jumpHeld,re=d.fly&&R.shift||d.downHeld;if(d.fly)d.v.x=Ne,d.v.z=ye,d.v.y=((pe?1:0)-(re?1:0))*8;else{let ln=d.onGround?14:5,xi=1-Math.exp(-ln*g);d.v.x+=(Ne-d.v.x)*xi,d.v.z+=(ye-d.v.z)*xi,Me?(d.v.y-=9*g,d.v.y<-3&&(d.v.y=-3),pe&&(d.v.y=3.4)):a.flat.climb[$t]||a.flat.climb[le]?(d.v.y=pe||z>.1?3.2:re?-3:Math.max(d.v.y-28*g,-1.5),d.fallTop=d.p.y):(d.v.y-=28*g,d.v.y<-40&&(d.v.y=-40),pe&&d.onGround&&(d.v.y=d.ride?10.5:8.6,d.onGround=!1))}let de=d.onGround,Pe=Nl(d.p,d.v,g,y,{canStep:!d.fly,grounded:d.onGround});if(d.onGround=Pe.onGround,Pe.stepped&&(d.eyeOff-=Pe.stepped),d.fallTop==null||d.fly||Me||d.onGround&&de?d.fallTop=d.p.y:d.onGround||(d.fallTop=Math.max(d.fallTop,d.p.y)),d.onGround&&!de){let ln=Cu(d.fallTop-d.p.y,{water:Me,flying:d.fly});ln&&(Ie(ln),lt("\u54CE\u5440\uFF0C\u6454\u4E86\u4E00\u4E0B")),d.fallTop=d.p.y}let Qe=Math.hypot(d.v.x,d.v.z);d.onGround&&!d.fly&&Qe>1&&(d.stepT=(d.stepT||0)+g*Qe,d.stepT>1.8&&(d.stepT=0,Rn("step",ur(a.get(V(d.p.x,d.p.y-.5,d.p.z)))))),d.p.y<-20&&(d.p={x:it.x,y:it.y+1,z:it.z},d.v={x:0,y:0,z:0},d.fallTop=d.p.y)}function am(g){let R=d.p.x,B=d.p.y+.9,z=d.p.z;for(let W=d.drops.length-1;W>=0;W--){let et=d.drops[W];et.age+=g;let pt=R-et.p.x,mt=B-et.p.y,dt=z-et.p.z,wt=Math.hypot(pt,mt,dt);if(wt<1.5&&et.age>.25&&Sn(v,et.id,1,u)===0){X.remove(et.s),d.drops.splice(W,1),d.dirtyMeta=!0,me(),Rn("pickup");continue}if(wt<4.5&&et.age>.25?(et.v.x=pt/wt*6,et.v.y=mt/wt*6,et.v.z=dt/wt*6,et.p.x+=et.v.x*g,et.p.y+=et.v.y*g,et.p.z+=et.v.z*g):(et.v.y-=18*g,et.v.x*=.9,et.v.z*=.9,Nl(et.p,et.v,g,y,{w:.25,h:.25})),et.age>300){X.remove(et.s),d.drops.splice(W,1);continue}et.s.position.set(et.p.x,et.p.y+.2+Math.sin(et.age*3)*.06,et.p.z)}}d.auto=Bu.get("auto")==="walk";let Wu=0;function lm(g){d.started||q.go.click(),Wu+=g,d.keys.w=!0,d.keys[" "]=Wu%1.6<.15,d.yaw+=g*.08}window.HW={build:jl,G:d,reg:a,inv:v,wallet:p,world:O,Inv:qh,Aud:mu,Amb:Mu,chests:E,crops:D,Farm:uu,clickSlot:bs,MODE:n,RULE:t,switchMode:Gt,questState:A,tradesJson:l,spawnVillagers:qt,terr:m,claimPortalRewards:Q,portals:T,claimedIds:L,mobS:j,mobDefs:Y,spawnMob:ht,hitMob:se,mobAt:Xt,surfaceY:Et,health:x,hurt:Ie,Health:Nu,furnaces:b,Smelt:Tu,smeltList:M,recipes:c,craftCtx:Ss,breakInfo:$l,start(){q.go.click()},state(){return{pos:{...d.p},coins:p.coins,inv:uo(v),loaded:O.stats.loaded,stats:{...d.stats},overlay:d.overlay,fly:d.fly}},lookAt(g,R,B){let z=Je(),W=g-z.x,et=R-z.y,pt=B-z.z;d.yaw=Math.atan2(-W,-pt),d.pitch=Math.atan2(et,Math.hypot(W,pt))},target(){let g=Ze("center");return g&&{x:g.x,y:g.y,z:g.z,n:g.n,face:g.face}},mine(g){g?(d.mining.active=!0,d.mining.src="center"):sn()},use(){return bn(Ze("center"))},key(g,R){d.keys[g]=R},open:Ut,close:Qt,save:In,spawn:it,dismount:wo,Rail:Vh,perf(){return{frames:d.frames.slice(),meshMs:O.stats.meshMs.slice(),genMs:O.stats.genMs.slice(),loaded:O.stats.loaded}},resetPerf(){d.frames.length=0,O.stats.meshMs.length=0,O.stats.genMs.length=0},ready:()=>O.ready(d.p.x,d.p.z)},requestAnimationFrame(Hu)}function bv(){let n=Ci("#ui"),t=e=>n.querySelector(e);return Bu.get("debug")!==null&&(t("#dbg").hidden=!1),{root:n,coins:t("#coins"),armor:t("#armorhud"),hearts:t("#hearts"),flash:Ci("#hurt"),hotbar:t("#hotbar"),selName:t("#selname"),ov:Ci("#ov"),toasts:t("#toasts"),btnInv:t("#b-inv"),btnSnd:t("#b-snd"),btnShop:t("#b-shop"),btnSet:t("#b-set"),btnView:t("#b-view"),bRide:t("#b-ride"),joy:t("#joy"),knob:t("#knob"),bJump:t("#b-jump"),bFly:t("#b-fly"),bPlace:t("#b-place"),bDown:t("#b-down"),start:Ci("#start"),go:Ci("#go"),dbg:t("#dbg").hidden?null:t("#dbg"),loading:t("#loading")}}Sv().catch(n=>{console.error(n);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+n.message)});})();
